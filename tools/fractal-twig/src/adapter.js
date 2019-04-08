const Fractal = require('@frctl/fractal');
const _ = require('lodash');
const Path = require('path');

const { utils } = Fractal;

class TwigAdapter extends Fractal.Adapter {
  constructor(Twig, source, app, config) {
    super(Twig, source);
    this._app = app;
    this._config = config;

    const self = this;

    Twig.extend(function extendTwig(tw) {
      /*
       * Register a Fractal template loader. Locations can be handles or paths.
       */

      tw.Templates.registerLoader('fractal', function registerCustomLoader(
        location,
        params
      ) {
        if (params.precompiled) {
          params.data = params.precompiled;
        } else {
          const view = isHandle(location)
            ? self.getView(location)
            : _.find(self.views, {
                path: Path.join(source.fullPath, location),
              });

          if (!view) {
            throw new Error(`Template ${location} not found`);
          }

          params.data = view.content;
        }

        return new tw.Template(params);
      });

      /*
       * Monkey patch the render method to make sure that the _self variable
       * always refers to the actual component/sub-component being rendered.
       * Without this _self would always refer to the root component.
       */

      const { render } = tw.Template.prototype;
      tw.Template.prototype.render = function customRender(context, params) {
        if (!self._config.pristine && this.id) {
          let handle = null;

          if (isHandle(this.id)) {
            handle = this.id;
          } else {
            const view = _.find(self.views, {
              path: Path.join(source.fullPath, this.id),
            });
            if (view) {
              ({ handle } = view);
            }
          }

          if (handle) {
            const prefixMatcher = new RegExp(`^\\${self._config.handlePrefix}`);
            let entity = source.find(handle.replace(prefixMatcher, '@'));
            if (entity) {
              entity = entity.isVariant ? entity : entity.variants().default();
              if (config.importContext) {
                context = utils.defaultsDeep(
                  _.cloneDeep(context),
                  entity.getContext()
                );
                context._self = entity.toJSON();
                setKeys(context);
              }
            }
          }
        }

        /*
         * tw JS uses an internal _keys property on the context data
         * which we need to regenerate every time we patch the context.
         */

        function setKeys(obj) {
          obj._keys = _.compact(
            _.map(obj, (val, key) =>
              _.isString(key) && !key.startsWith('_') ? key : undefined
            )
          );
          _.each(obj, (val, key) => {
            if (
              _.isPlainObject(val) &&
              (_.isString(key) && !key.startsWith('_'))
            ) {
              setKeys(val);
            }
          });
        }

        return render.call(this, context, params);
      };

      /*
       * tw caching is enabled for better perf, so we need to
       * manually update the cache when a template is updated or removed.
       */

      const unCache = view => {
        const path = Path.relative(
          source.fullPath,
          _.isString(view) ? view : view.path
        );
        if (view.handle && tw.Templates.registry[view.handle]) {
          delete tw.Templates.registry[view.handle];
        }
        if (tw.Templates.registry[path]) {
          delete tw.Templates.registry[path];
        }
      };

      tw.cache = false;

      self.on('view:updated', unCache);
      self.on('view:removed', unCache);
      self.on('wrapper:updated', unCache);
      self.on('wrapper:removed', unCache);
    });

    function isHandle(str) {
      return str && str.startsWith(self._config.handlePrefix);
    }
  }

  get twig() {
    return this._engine;
  }

  render(path, str, context, meta) {
    const self = this;

    meta = meta || {};

    if (!this._config.pristine) {
      // Used by fractal internally or in preview templates
      setEnv('_target', meta.target, context);
      setEnv('_env', meta.env, context);
      setEnv('_self', meta.self, context);
      setEnv('_config', this._app.config(), context);
    }

    return new Promise((resolve, reject) => {
      const tplPath = Path.relative(self._source.fullPath, path);

      try {
        const template = self.engine.twig({
          method: 'fractal',
          async: false,
          rethrow: true,
          name: meta.self
            ? `${self._config.handlePrefix}${meta.self.handle}`
            : tplPath,
          precompiled: str,
        });
        resolve(template.render(context));
      } catch (e) {
        reject(new Error(e));
      }
    });

    function setEnv(key, value, ctx) {
      if (ctx[key] === undefined && value !== undefined) {
        ctx[key] = value;
      }
    }
  }
}

module.exports = config => {
  config = _.defaults(config || {}, {
    pristine: false,
    handlePrefix: '@',
  });

  return {
    register(source, app) {
      const Twig = require('twig');

      if (!config.pristine) {
        _.each(require('./filters/index')(app), function(filter, name) {
          Twig.extendFilter(name, filter);
        });
      }

      _.each(config.functions || {}, function(func, name) {
        Twig.extendFunction(name, func);
      });

      _.each(config.filters || {}, function(filter, name) {
        Twig.extendFilter(name, filter);
      });

      _.each(config.tests || {}, function(test, name) {
        Twig.extendTest(name, test);
      });

      Twig.extend(function extendTwig(tw) {
        _.each(config.tags || {}, function(tag) {
          tw.exports.extendTag(tag(tw));
        });
      });

      const adapter = new TwigAdapter(Twig, source, app, config);

      adapter.setHandlePrefix(config.handlePrefix);

      return adapter;
    },
  };
};

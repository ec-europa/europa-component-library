/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const _ = require('lodash');
const Theme = require('@frctl/fractal').WebTheme;
const pkg = require('../package.json');

module.exports = options => {
  const config = _.defaultsDeep(_.clone(options || {}), {
    rtl: false,
    lang: 'en',
    styles: 'default',
    scripts: 'default',
    format: 'json',
    static: {
      mount: 'themes/ecl-fractal-theme',
    },
    version: pkg.version,
    favicon: null,
  });

  config.panels = config.panels || [
    'view',
    'context',
    'html',
    'resources',
    'info',
  ];

  config.nav = config.nav || ['search', 'docs', 'components', 'assets'];

  config.styles = []
    .concat(config.styles)
    .concat(config.stylesheet)
    .filter(url => url)
    .map(url =>
      url === 'default' ? `/${config.static.mount}/css/fractal.css` : url
    );

  config.scripts = [
    `/${config.static.mount}/js/jquery.min.js`,
    `/${config.static.mount}/js/jquery-resizable.min.js`,
    `/${config.static.mount}/js/select2.min.js`,
  ]
    .concat(config.scripts)
    .filter(url => url)
    .map(url =>
      url === 'default'
        ? `/${config.static.mount}/js/ecl-fractal-theme.js`
        : url
    );

  config.favicon = config.favicon || `/${config.static.mount}/favicon.ico`;

  const theme = new Theme(path.join(__dirname, '..', 'views'), config);

  theme.setErrorView('pages/error.nunj');

  theme.addStatic(
    path.join(__dirname, '..', 'dist'),
    `/${config.static.mount}`
  );

  theme.addRoute('/', {
    handle: 'overview',
    view: 'pages/components/intro.nunj',
  });

  theme.addRoute('/components', {
    handle: '/components',
    view: 'pages/components/intro.nunj',
  });

  theme.addRoute('/assets', { redirect: '/' });

  theme.addRoute(
    '/assets/:name',
    {
      handle: 'asset-source',
      view: 'pages/assets.nunj',
    },
    app => app.assets.visible().map(asset => ({ name: asset.name }))
  );

  theme.addRoute(
    '/components/preview/:handle',
    {
      handle: 'preview',
      view: 'pages/components/preview.nunj',
    },
    getHandles
  );

  theme.addRoute(
    '/components/render/:handle',
    {
      handle: 'render',
      view: 'pages/components/render.nunj',
    },
    getHandles
  );

  theme.addRoute(
    '/components/detail/:handle',
    {
      handle: 'component',
      view: 'pages/components/detail.nunj',
    },
    getHandles
  );

  theme.addRoute(
    '/components/raw/:handle/:asset',
    {
      handle: 'component-resource',
      static: (params, app) => {
        const component = app.components.find(`@${params.handle}`);
        if (component) {
          return path.join(component.viewDir, params.asset);
        }
        throw new Error('Component not found');
      },
    },
    getResources
  );

  theme.addRoute(
    '/docs/:path([^?]+?)',
    {
      handle: 'page',
      view: 'pages/doc.nunj',
    },
    app =>
      app.docs
        .filter(d => !d.isHidden && d.path !== '')
        .flatten()
        .map(page => ({ path: page.path }))
  );

  theme.on('init', (env, app) => {
    require('./filters')(theme, env, app); // eslint-disable-line global-require
    require('./search')(theme, env, app); // eslint-disable-line global-require
  });

  let handles = null;

  function getHandles(app) {
    app.components.on('updated', () => {
      handles = null;
    });
    if (handles) {
      return handles;
    }
    handles = [];
    app.components.flatten().each(comp => {
      handles.push(comp.handle);
      if (comp.variants().size > 1) {
        comp.variants().each(variant => handles.push(variant.handle));
      }
    });

    handles = handles.map(h => ({ handle: h }));
    return handles;
  }

  function getResources(app) {
    let params = [];
    app.components.flatten().each(comp => {
      params = params.concat(
        comp
          .resources()
          .flatten()
          .toArray()
          .map(res => ({ handle: comp.handle, asset: res.base }))
      );
    });
    return params;
  }

  return theme;
};

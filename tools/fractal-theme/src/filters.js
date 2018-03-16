/* eslint-disable import/no-extraneous-dependencies, no-restricted-properties */
const path = require('path');
const beautifyHTML = require('js-beautify').html;

module.exports = (theme, env, app) => {
  env.engine.addFilter('url', item => {
    if (item.isDoc) {
      if (!item.path) {
        return '/';
      }
      return theme.urlFromRoute('page', { path: item.path });
    } else if (item.isComponent || item.isVariant) {
      return theme.urlFromRoute('component', { handle: item.handle });
    } else if (item.isAssetSource) {
      return theme.urlFromRoute('asset-source', { name: item.name });
    } else if (item.isAsset) {
      return path.join('/', app.get('web.assets.mount'), item.srcPath);
    }
    throw new Error(`Cannot generate URL for ${item}`);
  });

  env.engine.addFilter('beautify', str =>
    beautifyHTML(str, {
      // TODO: move to config
      indent_size: 2,
      preserve_newlines: true,
      max_preserve_newlines: 1,
    })
  );

  env.engine.addFilter(
    'resourceUrl',
    str =>
      `/${app.web.get('assets.mount')}/components/${path.relative(
        path.resolve(app.components.get('path')),
        path.resolve(str)
      )}`
  );
  env.engine.addFilter('componentPath', str =>
    path.relative(
      process.cwd(),
      path.join(
        app.components.get('path'),
        path.relative(
          path.resolve(app.components.get('path')),
          path.resolve(str)
        )
      )
    )
  );

  env.engine.addFilter('fileSize', (bytes, decimals) => {
    if (bytes === 0) {
      return '0 Byte';
    }

    const k = 1000; // or 1024 for binary
    const dm = decimals + 1 || 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  });

  env.engine.addFilter('linkRefs', (str, item) => {
    if (!(item.isComponent || item.isVariant)) {
      return str;
    }

    const refs = item.references;

    return str.replace(
      new RegExp(`(${refs.map(r => `@${r.handle}`).join('|')})`, 'g'),
      handle => {
        try {
          let url = theme.urlFromRoute('component', {
            handle: handle.replace('@', ''),
          });
          const pathify = env.engine.getGlobal('path');
          url = pathify.call(this, url);
          return `<a href="${url}">${handle}</a>`;
        } catch (e) {
          return handle;
        }
      }
    );
  });
};

/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

// Export config
module.exports = fractal => {
  const paths = {
    build: `${__dirname}/../../../dist`,
    static: `${__dirname}/../../../static`,
  };

  fractal.components.set(
    'path',
    path.resolve(__dirname, '../../../src/flavors/ec')
  );

  fractal.web.set('static.path', paths.static);
  fractal.web.set('builder.dest', paths.build);
  fractal.web.set('builder.urls.ext', null);
};

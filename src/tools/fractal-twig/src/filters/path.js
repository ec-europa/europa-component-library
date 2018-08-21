const _ = require('lodash');
const { utils } = require('@frctl/fractal');

module.exports = function(fractal) {
  return function(path) {
    const env = this.context._env;
    const request = env.request || this.context._request;

    return !env || env.server
      ? path
      : utils.relUrlPath(
          path,
          _.get(request, 'path', '/'),
          fractal.web.get('builder.urls')
        );
  };
};

var Twig = require('twig');
var path = require('path');
var hashGenerator = require('hasha');
var mapcache = require('./mapcache');

Twig.cache(false);

Twig.extend(function(Twig) {
  var compiler = Twig.compiler;
  compiler.module['webpack'] = require('./compiler');
});

module.exports = function(source) {
  var path = require.resolve(this.resource),
    id = hashGenerator(path),
    tpl;

  mapcache.set(id, path);

  this.cacheable && this.cacheable();

  tpl = Twig.twig({
    id: id,
    path: path,
    data: source,
    allowInlineIncludes: true,
  });

  tpl = tpl.compile({
    module: 'webpack',
    twig: 'twig',
  });

  this.callback(null, tpl);
};

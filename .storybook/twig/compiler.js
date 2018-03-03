var path = require('path');
var hashGenerator = require('hasha');
var _ = require('underscore');
var loaderUtils = require('loader-utils');
var mapcache = require('./mapcache');

module.exports = function(id, tokens, pathToTwig) {
  var includes = [];
  var resourcePath = mapcache.get(id);
  var processDependency = function(token) {
    includes.push(token.value);
    token.value = hashGenerator(
      path.resolve(path.dirname(resourcePath), token.value)
    );
  };

  var processToken = function(token) {
    if (token.type == 'logic' && token.token.type) {
      switch (token.token.type) {
        case 'Twig.logic.type.block':
        case 'Twig.logic.type.if':
        case 'Twig.logic.type.elseif':
        case 'Twig.logic.type.else':
        case 'Twig.logic.type.for':
        case 'Twig.logic.type.spaceless':
        case 'Twig.logic.type.macro':
          _.each(token.token.output, processToken);
          break;
        case 'Twig.logic.type.extends':
        case 'Twig.logic.type.include':
          _.each(token.token.stack, processDependency);
          break;
        case 'Twig.logic.type.embed':
          _.each(token.token.output, processToken);
          _.each(token.token.stack, processDependency);
          break;
        case 'Twig.logic.type.import':
        case 'Twig.logic.type.from':
          if (token.token.expression != '_self') {
            _.each(token.token.stack, processDependency);
          }
          break;
      }
    }
  };

  var parsedTokens = JSON.parse(tokens);

  _.each(parsedTokens, processToken);

  var output = [
    'var twig = require("' + pathToTwig + '").twig,',
    '    template = twig({id:' +
      JSON.stringify(id) +
      ', data:' +
      JSON.stringify(parsedTokens) +
      ', allowInlineIncludes: true, rethrow: true});\n',
    'module.exports = function(context) { return template.render(context); }',
  ];

  if (includes.length > 0) {
    _.each(_.uniq(includes), function(file) {
      if (file.startsWith('@ec-europa/')) {
        file = path.resolve(
          process.cwd(),
          'node_modules',
          file,
          `${file.split('/')[1]}.twig`
        );
      }

      output.unshift('require("!twig!' + file + '");\n');
    });
  }

  return output.join('\n');
};

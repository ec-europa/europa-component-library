const fs = require('fs');
const path = require('path');
const Twig = require('twig'); // eslint-disable-line

Twig.extend(tw => {
  tw.Templates.registerLoader('ecl', (location, params, callback) => {
    const { precompiled } = params;

    let fullPath = params.path || location;

    if (fullPath.startsWith('@ec-europa/')) {
      fullPath = path.resolve(
        process.cwd(),
        'node_modules',
        fullPath,
        `${fullPath.split('/')[1]}.twig`
      );
    }

    try {
      if (!fs.statSync(fullPath).isFile()) {
        throw new tw.Error(`Unable to find template file {fullPath}`);
      }
    } catch (err) {
      throw new tw.Error(`Unable to find template file ${fullPath}`);
    }

    let data = fs.readFileSync(fullPath, 'utf8');

    if (precompiled === true) {
      data = JSON.parse(data);
    }

    const parser = tw.Templates.parsers[params.parser];

    // template is in data
    const template = parser.call(
      this,
      Object.assign({}, params, {
        data,
        path: fullPath,
      })
    );

    // Force method
    template.getLoaderMethod = () => 'ecl';

    if (typeof callback === 'function') {
      return callback(template);
    }

    return template;
  });

  tw.Templates.unRegisterLoader('fs');
});

const {
  context,
} = require('./framework/templates/ecl-templates-forms/ecl-templates-forms.config');

const params = {
  path: 'framework/templates/ecl-templates-forms/ecl-templates-forms.twig',
  method: 'ecl',
  async: false,
  rethrow: true,
  load(template) {
    console.log(template.render(context));
  },
};

Twig.twig(params);

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const theo = require('theo');

const inputs = [
  {
    file: path.join(__dirname, '../themes/default/index.yml'),
    theme: 'default',
  },
  {
    file: path.join(__dirname, '../themes/theme1/index.yml'),
    theme: 'theme1',
  },
];

const writeDir = path.join(__dirname, '../dist');
mkdirp.sync(writeDir);

// Based on https://github.com/salesforce-ux/theo/blob/master/lib/formats/default.scss.hbs
theo.registerFormat(
  'eclScss',
  `/* ECL Variables */

{{#each props as |prop|}}
  {{#if prop.comment~}}
  // {{{trim prop.comment}}}
  {{/if~}}
    $ecl-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}} !default;

  {{/each}}
`
);

inputs.forEach(({ file, theme }) => {
  theo
    .convert({
      transform: {
        type: 'web',
        file,
      },
      format: {
        type: 'eclScss',
      },
    })
    .then(result => {
      fs.writeFile(
        path.join(writeDir, `${theme}.scss`),
        result,
        error => error && console.log('Error writing file: ', error)
      );
    })
    .catch(error => error && console.log('Error converting tokens: ', error));
});

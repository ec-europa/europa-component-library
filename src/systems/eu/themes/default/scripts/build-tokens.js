const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const theo = require('theo');

const inputFile = path.join(__dirname, '../index.yml');
const outputFile = 'index.scss';
const writeDir = path.join(__dirname, '../exports');
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

theo
  .convert({
    transform: {
      type: 'web',
      file: inputFile,
    },
    format: {
      type: 'eclScss',
    },
  })
  .then(result => {
    fs.writeFile(
      path.join(writeDir, outputFile),
      result,
      error => error && console.log('Error writing file: ', error)
    );
  })
  .catch(error => error && console.log('Error converting tokens: ', error));

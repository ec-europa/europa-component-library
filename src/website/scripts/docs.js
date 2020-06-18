#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const documentation = require('documentation'); // eslint-disable-line import/no-extraneous-dependencies

const dir = path.resolve(
  __dirname,
  '../../systems/ec/implementations/vanilla/packages'
);

const files = glob.sync('**/*.js', {
  cwd: dir,
});

const outputDir = path.resolve(__dirname, '../src/pages/ec/_jsdoc');

try {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
} catch (error) {
  console.error(error);
}

console.log('Start processing JSDoc...');

Promise.all(
  files.map(file =>
    documentation
      .build([path.resolve(dir, file)], {})
      .then(res => {
        if (res && res.length > 0) {
          return Promise.resolve([
            res[0].namespace,
            documentation.formats.md(res),
          ]);
        }

        return Promise.resolve(null);
      })
      .then(output => {
        if (output) {
          const [namespace, contentPromise] = output;
          contentPromise.then(content => {
            fs.writeFileSync(
              path.resolve(outputDir, `${namespace.toLowerCase()}.md`),
              content
            );
          });
        }
      })
  )
).then(() => console.log('JSDoc created!'));

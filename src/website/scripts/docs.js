#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const documentation = require('documentation');

const dir = path.resolve(__dirname, '../../implementations/vanilla/components');

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
  files.map((file) =>
    documentation
      .build([path.resolve(dir, file)], {})
      .then((res) => {
        if (res && res.length > 0) {
          return Promise.resolve([
            res[0].namespace,
            documentation.formats.md(res),
          ]);
        }

        return Promise.resolve(null);
      })
      .then((output) => {
        if (output) {
          const [namespace, contentPromise] = output;
          contentPromise.then((content) => {
            fs.writeFileSync(
              path.resolve(outputDir, `${namespace.toLowerCase()}.md`),
              content
            );
          });
        }
      })
  )
).then(() => console.log('JSDoc created!'));

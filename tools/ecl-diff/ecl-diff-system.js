#!/usr/bin/env node

const fs = require('fs');
const prettier = require('prettier');
const eclDiffComponent = require('./ecl-diff-component.js');

const rootFolder = process.cwd();

module.exports = (system, components) => {
  return new Promise((resolve) => {
    // We run the promises sequentially to avoid memory leaks,
    // the reduce here will concatenate the Promise.all for
    // each component.
    components[system]
      .reduce(
        (current, next) => current.then(() => eclDiffComponent(next, system)),
        Promise.resolve()
      )
      .then((res) => {
        let message = `\n##### Ecl-diff-full task completed for the "${system} system", ECL "${res[0].version}" with ${res[0][system].matches} perfect* matches out of ${res[0][system].variants} variants checked in ${components[system].length} components.\n`;
        message += `\n* For the diff we use https://www.npmjs.com/package/html-differ, with this conf: `;
        message += res[0].diffOptions;
        console.log(message);
        res[0][system].message += message;
        const markdown = prettier.format(res[0][system].message, {
          semi: false,
          parser: 'markdown',
        });
        // Write the full report for the given system.
        try {
          fs.writeFileSync(
            `${rootFolder}/docs/ecl-diff/${system}/${res[0].version}.md`,
            markdown
          );
        } catch (error) {
          console.error(error);
        }
        resolve(res);
      });
  });
};

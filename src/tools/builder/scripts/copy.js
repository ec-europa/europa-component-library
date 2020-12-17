const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { ncp } = require('ncp');
const globby = require('globby');

const copy = promisify(ncp);

module.exports = (patterns, from, to) => {
  const executor = async () => {
    const paths = await globby(patterns, { nodir: true, cwd: from });

    paths.map(async (file) => {
      const input = path.resolve(from, file);
      const dest = path.resolve(to, file);

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await copy(input, dest);
    });
  };

  executor();
};

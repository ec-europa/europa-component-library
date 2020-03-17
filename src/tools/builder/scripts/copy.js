const path = require('path');
const { promisify } = require('util');
const { ncp } = require('ncp');
const mkdirp = require('mkdirp');
const globby = require('globby');

const copy = promisify(ncp);

module.exports = (patterns, from, to) => {
  const executor = async () => {
    const paths = await globby(patterns, { nodir: true, cwd: from });

    paths.map(async file => {
      const input = path.resolve(from, file);
      const dest = path.resolve(to, file);

      await mkdirp(path.dirname(dest));
      await copy(input, dest);
    });
  };

  executor();
};

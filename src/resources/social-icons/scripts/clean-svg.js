const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const SVGO = require('svgo');

const svgoConfig = require('./config/svgo');

const svgo = new SVGO(svgoConfig);

const src = path.resolve(__dirname, '../src');
const out = path.resolve(__dirname, '../dist/svg');

glob.sync('**/*.svg', { cwd: src }).forEach((file) => {
  const filepath = path.resolve(src, file);
  const outputPath = path.resolve(out, file);

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    svgo.optimize(data, { path: filepath }).then((result) => {
      mkdirp.sync(path.dirname(outputPath));
      fs.writeFileSync(outputPath, result.data, 'utf8');
    });
  });
});

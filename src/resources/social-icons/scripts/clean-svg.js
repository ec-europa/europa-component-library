const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const { loadConfig, optimize } = require('svgo');

const src = path.resolve(__dirname, '../src');
const out = path.resolve(__dirname, '../dist/svg');

glob.sync('**/*.svg', { cwd: src }).forEach(async (file) => {
  const filepath = path.resolve(src, file);
  const outputPath = path.resolve(out, file);
  const config = await loadConfig('./scripts/config/svgo');

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const svg = optimize(data, { ...config, path: filepath });
    const optimizedSvgString = svg.data;
    mkdirp.sync(path.dirname(outputPath));
    fs.writeFileSync(outputPath, optimizedSvgString, 'utf8');
  });
});

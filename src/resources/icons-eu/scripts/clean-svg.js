const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const { loadConfig, optimize } = require('svgo');
const xml2js = require('xml2js');

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

    const parser = new xml2js.Parser();
    parser.parseString(data, (parseError, result) => {
      const clone = JSON.parse(JSON.stringify(result));

      // Add viewBox
      clone.svg.$.viewBox = `0 0 24 24`;

      const builder = new xml2js.Builder({ headless: true });
      const xml = builder.buildObject(clone);

      // Clean SVG
      const svg = optimize(xml, { ...config, path: filepath });
      const optimizedSvgString = svg.data;
      mkdirp.sync(path.dirname(outputPath));
      fs.writeFileSync(outputPath, optimizedSvgString, 'utf8');
    });
  });
});

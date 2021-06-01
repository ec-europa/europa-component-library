const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const xml2js = require('xml2js');
const { loadConfig } = require('svgo');
const { optimize } = require('svgo');

const src = path.resolve(__dirname, '../src');
const out = path.resolve(__dirname, '../dist/svg');

(async () => {
  const config = await loadConfig('config/svgo', process.cwd());

  glob.sync('**/*.svg', { cwd: src }).forEach((file) => {
    const filepath = path.resolve(src, file);
    const outputPath = path.resolve(out, file);

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const parser = new xml2js.Parser();
      parser.parseString(data, (parseError, result) => {
        const clone = JSON.parse(JSON.stringify(result));

        // Add viewBox
        clone.svg.$.viewBox = `0 0 48 48`;

        const builder = new xml2js.Builder({ headless: true });
        const xml = builder.buildObject(clone);

        // Clean SVG
        const newSvg = optimize(xml, { ...config, path: filepath });
        mkdirp.sync(path.dirname(outputPath));
        fs.writeFileSync(outputPath, newSvg.data, 'utf8');
      });
    });
  });
})();

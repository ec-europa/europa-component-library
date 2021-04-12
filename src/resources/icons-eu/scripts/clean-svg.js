const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const SVGO = require('svgo');
const xml2js = require('xml2js');
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

    const parser = new xml2js.Parser();
    parser.parseString(data, (parseError, result) => {
      const clone = JSON.parse(JSON.stringify(result));

      // Add viewBox
      clone.svg.$.viewBox = `0 0 ${result.svg.$.width} ${result.svg.$.height}`;

      const builder = new xml2js.Builder({ headless: true });
      const xml = builder.buildObject(clone);

      // Clean SVG
      svgo.optimize(xml, { path: filepath }).then((svgoResult) => {
        mkdirp.sync(path.dirname(outputPath));
        fs.writeFileSync(outputPath, svgoResult.data, 'utf8');
      });
    });
  });
});

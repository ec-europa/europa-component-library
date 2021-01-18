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

      // Extract paths from defs
      if (clone.svg.defs) {
        if (!clone.svg.path) clone.svg.path = [];
        clone.svg.path = clone.svg.path.concat(
          clone.svg.defs.map((def) => def.path[0])
        );

        delete clone.svg.defs;
      }

      // Only keep d
      clone.svg.path = clone.svg.path.map((p) => ({ $: { d: p.$.d } }));

      // Remove use
      delete clone.svg.use;

      // Rebuild SVG
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

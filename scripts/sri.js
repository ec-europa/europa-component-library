const fs = require('fs');
const path = require('path');
const ssri = require('ssri');
const glob = require('glob');
const prettier = require('prettier');

const version = process.argv.slice(2)[0];

if (!version) {
  console.warn(`Couldn't retrieve the version. Skipping...`);
  process.exit(0);
}
// Get all CSS and JS files
const files = glob.sync(
  `${path.resolve(__dirname, '../dist/packages')}/**/*.@(css|js)`
);

// Compute SRI hashes
const hashes = {};
files.forEach((file) => {
  const data = fs.readFileSync(file);
  const integrityObj = ssri.fromData(data, {
    algorithms: ['sha256', 'sha384', 'sha512'],
  });
  const filename = path.basename(file);
  hashes[filename] = [
    integrityObj.sha256[0].source,
    integrityObj.sha384[0].source,
    integrityObj.sha512[0].source,
  ];
});

// Export to JSON
fs.writeFileSync(
  `${path.resolve(
    __dirname,
    '../dist'
  )}/europa-component-library-${version}-sri.json`,
  prettier.format(JSON.stringify(hashes), { parser: 'json' })
);

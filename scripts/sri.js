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
  `${path.resolve(__dirname, '../dist/packages')}/**/*.@(css|js)`,
);

// Compute SRI hashes
async function computeHashes() {
  const filePromises = files.map((file) =>
    fs.promises.readFile(file).then((data) => {
      const integrityObj = ssri.fromData(data, {
        algorithms: ['sha256', 'sha384', 'sha512'],
      });
      const filename = path.basename(file);
      return {
        filename,
        hashes: [
          integrityObj.sha256[0].source,
          integrityObj.sha384[0].source,
          integrityObj.sha512[0].source,
        ],
      };
    }),
  );

  const fileResults = await Promise.allSettled(filePromises);

  const hashes = {};
  fileResults.forEach((result) => {
    if (result.status === 'fulfilled') {
      const { filename, hashes: fileHashes } = result.value;
      hashes[filename] = fileHashes;
    }
  });

  // Export to JSON
  const jsonString = JSON.stringify(hashes);
  const formattedJson = await prettier.format(jsonString, { parser: 'json' });
  await fs.promises.writeFile(
    `${path.resolve(
      __dirname,
      '../scripts',
    )}/europa-component-library-${version}-sri.json`,
    formattedJson,
  );
}

computeHashes();

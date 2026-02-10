const fs = require('fs');
const path = require('path');

const positiveSourceDir = path.resolve(__dirname, '../src/positive');
const negativeSourceDir = path.resolve(__dirname, '../src/negative');
const positiveOutputDir = path.resolve(__dirname, '../dist/positive');
const negativeOutputDir = path.resolve(__dirname, '../dist/negative');

if (!fs.existsSync(positiveOutputDir)) {
  fs.mkdirSync(positiveOutputDir, { recursive: true });
}
if (!fs.existsSync(negativeOutputDir)) {
  fs.mkdirSync(negativeOutputDir, { recursive: true });
}

const toCamelCase = (str) =>
  str
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');

const generateSvgExports = (sourceDir, outputDir) => {
  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => file.endsWith('.svg'));

  const svgExports = files.map((file) => {
    const name = path.basename(file, '.svg');
    const sanitizedName = toCamelCase(name);
    const svgContent = fs
      .readFileSync(path.join(sourceDir, file), 'utf-8')
      .replace(/`/g, '\\`')
      .trim();

    return `export const ${sanitizedName} = \`${svgContent}\`;`;
  });

  const outputFile = path.resolve(outputDir, 'esm-export.js');
  fs.writeFileSync(outputFile, svgExports.join('\n\n'));
};

generateSvgExports(positiveSourceDir, positiveOutputDir);
generateSvgExports(negativeSourceDir, negativeOutputDir);

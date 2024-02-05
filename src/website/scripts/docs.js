#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { execSync } = require('child_process');

const publicUrl = process.env.PUBLIC_URL || '';
const dir = path.resolve(__dirname, '../../implementations/vanilla/components');

const files = glob.sync('**/*.js', {
  cwd: dir,
});

const publicDir = path.resolve(__dirname, '../public');
const apisDir = 'apis';
const outputDir = path.resolve(publicDir, apisDir);
const icon = fs.readFileSync(`${publicDir}/gear.svg`, 'utf-8');

// Create public directory if not exists
try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
} catch (error) {
  console.error('Error creating public directory:', error);
  process.exit(1);
}

// Create apis directory if not exists
try {
  const apisDirPath = path.resolve(publicDir, apisDir);
  if (!fs.existsSync(apisDirPath)) {
    fs.mkdirSync(apisDirPath);
  }
} catch (error) {
  console.error('Error creating apis directory:', error);
  process.exit(1);
}

function capitalizeFirstLetter(inputString) {
  return inputString
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

try {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
} catch (error) {
  console.error('Error creating output directory:', error);
  process.exit(1);
}

console.log('Start processing JSDoc...');

const componentNames = [];

files.forEach((file) => {
  const inputFile = path.resolve(dir, file);
  const namespace = () =>
    path.basename(file, '.js') === 'file'
      ? 'FileDownload'
      : capitalizeFirstLetter(path.basename(file, '.js'));
  const outputFile = path.resolve(outputDir, `${namespace()}.html`);

  try {
    execSync(
      `jsdoc --configure jsdoc-config.json ${inputFile} --destination ${outputDir}`,
    );
    console.log(`File generated: ${outputFile}`);
    // Read the generated HTML file
    let content = fs.readFileSync(outputFile, 'utf-8');
    if (content) {
      // Add the script tag to the head of the HTML
      content = content.replace(
        '<head>',
        `<head>\n
          <base target="_top">\n
          <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.js" integrity="sha512-hBWsS94l8+snzSPo759jDKZ3z3jn3WT4snJZTBaeMPbrCGzDrYdl2pN9EaXjh6IqEZC7wF10qcmp42TPRVgAYQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
      );

      // Replace the incorrect "Home" link with the correct one
      content = content.replace(
        '<a href="index.html">Home</a>',
        `<a href="${publicUrl}/apis/index.html">Home</a>`,
      );

      fs.writeFileSync(outputFile, content, 'utf-8');
      componentNames.push(namespace());
    }
  } catch (error) {
    console.log(error);
  }
});

// Create the index page with links to individual component documentation
const indexPageContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/jsdoc.css">\n
    <link rel="stylesheet" type="text/css" href="styles/prettify.css">\n
    <title>ECL apis</title>
    <style>
      body {
        padding: 1rem;
        max-width: 1200px;
        margin: o auto;
      }
      .ecl-apis-header h1 {
        border-bottom: 1px solid lightgrey;
        padding-bottom: 0.75rem;
      }
      .ecl-apis-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
      }
      .ecl-apis-menu li {
        flex-grow: 1;
        padding: 1rem 0;
        border: 1px solid lightgrey;
        margin: 0.5rem;
        width: 190px;
        text-align: center;
      }
      .ecl-apis-menu li:hover {
        background: #26324b;
        border-color: #26324b;
        cursor: pointer;
      }
      .ecl-apis-menu li a {
        align-items: center;
        display:flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 600;
        color: #26324b;
      }
      .ecl-apis-menu li a svg {
        margin-bottom: 0.5rem;
      }
      .ecl-apis-menu li:hover a {
        color: #fff;
      }
      .ecl-apis-menu li:hover svg {
        fill: #fff;
      }
    </style>
  </head>
  <body>
    <div class="ecl-apis-header">
      <a href="../" target="_blank">Back to the Ecl website</a>
      <h1>ECL apis</h1>
    </div>
    <ul class="ecl-apis-menu">
      ${componentNames.map((component) => `<li><a href="${component}.html">${icon} ${component}</a></li>`).join('\n')}
    </ul>
  </body>
  </html>
`;

const indexPageFile = path.resolve(outputDir, 'index.html');
fs.writeFileSync(indexPageFile, indexPageContent, 'utf-8');

console.log('JSDoc processing completed!');

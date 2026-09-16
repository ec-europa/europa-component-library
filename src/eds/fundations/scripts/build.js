const fs = require('fs');
const path = require('path');
const sass = require('sass');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'build');

const result = sass.compile(path.join(root, 'custom-properties.scss'), {
  style: 'expanded',
});

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'eds-fundations.css'), result.css);

console.log(`Built build/eds-fundations.css (${result.css.length} bytes)`);

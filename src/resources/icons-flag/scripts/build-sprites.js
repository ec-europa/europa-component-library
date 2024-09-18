const path = require('path');
const glob = require('glob');

const writeSprite = require('./write-sprite');

let src = path.resolve(__dirname, '../dist/svg/members');
let dest = path.resolve(__dirname, '../dist/sprites');
let files = glob
  .sync('*.svg', { cwd: src })
  .sort((a, b) => a.localeCompare(b, 'en'));

/* Generate 1 sprite with all icons and organize icons per folder */

writeSprite({ files, cwd: src, dest, outputFile: `icons-flag.svg` });

src = path.resolve(__dirname, '../dist/svg/non-members');
dest = path.resolve(__dirname, '../dist/sprites');
files = glob.sync('*.svg', { cwd: src });

/* Generate 1 sprite with all icons and organize icons per folder */

writeSprite({
  files,
  cwd: src,
  dest,
  outputFile: `icons-flag-non-members.svg`,
});

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const run = async () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV !== 'production') {
    console.log(
      'This script should be run only when going in production on europa.eu PHP hosting with Varnish constraints.'
    );
    return;
  }

  const pattern = path.resolve(__dirname, '../dist/**/*.html');

  const htmlFiles = glob.sync(pattern, { ignore: ['**/index.html'] });

  htmlFiles.forEach(file => {
    const dir = file.replace(/\.html+$/i, '');
    if (!fs.existsSync(dir)) {
      console.log(`Creating folder: ${dir}`);
      fs.mkdirSync(dir);
    }

    fs.copyFileSync(file, `${dir}/index.html`);
  });
};

run();

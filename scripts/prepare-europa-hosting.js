#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

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
      fs.mkdirSync(dir);
    }

    const html = fs.readFileSync(file);
    const $ = cheerio.load(html);

    $('link').each((_, link) => {
      const href = $(link).attr('href');
      if (!href || href[0] === '#' || href.includes('http')) return;
      $(link).attr('href', `../${href}`);
    });

    $('script').each((_, script) => {
      const scriptPath = $(script).attr('src');
      if (!scriptPath || scriptPath.includes('http')) return;
      $(script).attr('src', `../${scriptPath}`);
    });

    $('meta').each((_, metaTag) => {
      const contentPath = $(metaTag).attr('content');
      $(metaTag).attr('content', `../${contentPath}`);
    });

    $('iframe').each((_, iframe) => {
      const src = $(iframe).attr('src');
      if (!src || src[0] === '#' || src.includes('http')) return;
      $(iframe).attr('src', `../${src}`);
    });

    $('a').each((_, link) => {
      const href = $(link).attr('href');
      if (!href || href[0] === '#' || href.includes('http')) return;
      $(link).attr('href', `../${href}`);
    });

    const htmlUpdated = $.html();

    fs.writeFileSync(`${dir}/index.html`, htmlUpdated);
  });
};

run();

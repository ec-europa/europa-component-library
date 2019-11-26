#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

const htmlFiles = glob.sync(path.resolve(__dirname, '../dist/**/*.html'), {
  ignore: ['**/index.html'],
});

htmlFiles.forEach(file => {
  const dir = file.replace(/\.html+$/i, '');
  console.log(`Working on: ${dir}`);

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
    $(iframe).attr('src', `../${src}/`);
  });

  $('a').each((_, link) => {
    const href = $(link).attr('href');
    if (!href || href[0] === '#' || href.includes('http')) return;
    $(link).attr('href', `../${href}/`);
  });

  const htmlUpdated = $.html();

  fs.writeFileSync(`${dir}/index.html`, htmlUpdated);
});

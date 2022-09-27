#!/usr/bin/env node

const fs = require('fs');
const twing = require('@ecl/twig-ec-storybook/.storybook/environment');
const demoData = require('@ecl/specs-component-social-media-follow/demo/data');
const prettier = require('prettier');

const template = '@ecl/social-media-follow/social-media-follow.html.twig';
const horizontal = prettier.format(twing.render(template, demoData), {
  semi: false,
  parser: 'html',
});
const vertical = prettier.format(
  twing.render(template, { ...demoData, variant: 'vertical' }),
  { semi: false, parser: 'html' }
);
fs.mkdirSync('src');
fs.writeFile('src/ecl-social-media-follow.html', horizontal, (err) => {
  if (err) {
    console.error(err);
  }
});

fs.writeFile('src/ecl-social-media-follow--vertical.html', vertical, (err) => {
  if (err) {
    console.error(err);
  }
});

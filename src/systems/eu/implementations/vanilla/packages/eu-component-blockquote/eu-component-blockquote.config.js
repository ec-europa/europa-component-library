/* eslint-disable import/no-extraneous-dependencies */
const context = require('@ecl/eu-specs-blockquote/demo/data');

module.exports = {
  title: 'Blockquotes',
  label: 'Blockquotes',
  status: 'ready',
  context: {
    author: context.author,
    body: context.citation,
  },
};

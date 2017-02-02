const resolve = require('path').resolve;
const copy = require('fs-extra').copy; // eslint-disable-line import/no-extraneous-dependencies

const dest = process.env.NODE_ENV === 'production' ? '../dist/framework' : '../static/framework';

// Copy fonts
copy(resolve(__dirname, '../framework/fonts'), resolve(__dirname, dest, 'fonts'), (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log('Fonts copied!');
});

// Copy images
copy(resolve(__dirname, '../framework/images'), resolve(__dirname, dest, 'images'), (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log('Images copied!');
});

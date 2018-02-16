const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd
  ? '../../../dist/flavors/eu'
  : '../../../static/flavors/eu';

module.exports = {
  copy: [
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/eu/components/eu-logos/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};

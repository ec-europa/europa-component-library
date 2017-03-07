const merge = require('webpack-merge');
const commonConfig = require('./scripts/webpack.common');
const developmentConfig = require('./scripts/webpack.development');
const productionConfig = require('./scripts/webpack.production');

module.exports = process.env.NODE_ENV === 'production'
  ? merge(commonConfig, productionConfig)
  : merge(commonConfig, developmentConfig);

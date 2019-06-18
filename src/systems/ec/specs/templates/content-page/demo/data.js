/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const { loremIpsum } = require('lorem-ipsum');

module.exports = { demoText: loremIpsum({ count: 25 }) };

const path = require('path');

module.exports = {
  verbose: true,
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file-mock.js',
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/style-mock.js',
  },
  rootDir: path.resolve(__dirname),
  roots: [],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/test/scripts/babel-jest.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/__config__/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
};

const path = require('path');

module.exports = {
  verbose: true,
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/storybook/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/storybook/test/__mocks__/styleMock.js',
  },
  rootDir: path.resolve(__dirname, '..'),
  roots: ['<rootDir>/packages', '<rootDir>/storybook'],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/storybook/scripts/babel-jest.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/storybook/test/__config__/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
};

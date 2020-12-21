const { spawn } = require('child_process');
const rootPkg = require('../../../package.json');

const { apps } = rootPkg;
const app = apps['storybook-eu'];

const cp = spawn(
  'start-storybook',
  [
    `-p`,
    `${app.port}`,
    `-s`,
    `../../presets/eu-core/build`,
    `-c`,
    `.storybook`,
    `--ci`,
  ],
  { stdio: 'inherit' }
);

cp.on('error', (err) =>
  console.error('An error occured in EU storybook: ', err)
);

cp.on('end', () => console.log('EU storybook stopped'));

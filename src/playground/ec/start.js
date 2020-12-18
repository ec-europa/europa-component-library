const { spawn } = require('child_process');
const rootPkg = require('../../../package.json');

const { apps } = rootPkg;
const app = apps['storybook-ec'];

const cp = spawn(
  'start-storybook',
  [
    `-p`,
    `${app.port}`,
    `-s`,
    `../../presets/ec-core/build`,
    `-c`,
    `.storybook`,
    `--ci`,
  ],
  { stdio: 'inherit' }
);

cp.on('error', (err) =>
  console.error('An error occured in EC storybook: ', err)
);

cp.on('end', () => console.log('EC storybook stopped'));

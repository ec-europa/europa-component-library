const path = require('path');
const { exec } = require('child_process');
const bs = require('browser-sync').create();

bs.watch(
  `${path.resolve(__dirname, '../..')}/(dev|eu-core)/src/*.scss`,
  (event) => {
    if (event === 'change') {
      bs.notify('Change in preset scss files, rebuilding styles ...');
      const subprocess = exec('npm run build:styles');
      subprocess.on('error', (err) =>
        bs.notify(`An error occured: ${err.message}`)
      );
      subprocess.on('exit', () => {
        bs.notify('New styles ready');
        bs.reload('*.css');
      });
    }
  }
);

bs.watch(
  `${path.resolve(__dirname, '../..')}/(dev|eu-core)/src/*.js`,
  (event) => {
    if (event === 'change') {
      bs.notify('Change in preset javascript files, rebuilding scripts ...');
      const subprocess = exec('npm run build:scripts');
      subprocess.on('error', (err) =>
        bs.notify(`An error occured: ${err.message}`)
      );
      subprocess.on('exit', () => {
        bs.notify('New scripts ready');
        bs.reload();
      });
    }
  }
);

bs.watch(
  `${path.resolve(__dirname, '../../..')}/implementations/vanilla/**/*.scss`,
  (event) => {
    if (event === 'change') {
      bs.notify('Change in vanilla scss files, rebuilding styles ...');
      const subprocess = exec('npm run build:styles');
      subprocess.on('error', (err) =>
        bs.notify(`An error occured: ${err.message}`)
      );
      subprocess.on('exit', () => {
        bs.notify('New styles ready');
        bs.reload('*.css');
      });
    }
  }
);

bs.watch(
  `${path.resolve(__dirname, '../../..')}/implementations/vanilla/**/*.js`,
  (event) => {
    if (event === 'change') {
      bs.notify('Change in vanilla javascript files, rebuilding scripts ...');
      const subprocess = exec('npm run build:scripts');
      subprocess.on('error', (err) =>
        bs.notify(`An error occured: ${err.message}`)
      );
      subprocess.on('exit', () => {
        bs.notify('New scripts ready');
        bs.reload();
      });
    }
  }
);

bs.watch(
  `${path.resolve(__dirname, '../../..')}/themes/(dev|eu-core)/**/*.scss`,
  (event) => {
    if (event === 'change') {
      bs.notify('Change in theme scss files, rebuilding styles ...');
      const subprocess = exec('npm run build:styles');
      subprocess.on('error', (err) =>
        bs.notify(`An error occured: ${err.message}`)
      );
      subprocess.on('exit', () => {
        bs.notify('New styles ready');
        bs.reload('*.css');
      });
    }
  }
);

bs.init({
  proxy: 'localhost:6007', // eu storybook
  open: false,
});

const path = require('path');
const { exec } = require('child_process');
const bs = require('browser-sync').create();

bs.watch(`${path.resolve(__dirname, '../..')}/ec-core/src/*.scss`, (event) => {
  if (event === 'change') {
    bs.notify(`Change in ec-core preset scss files, rebuilding styles ...`);
    const childProcess = exec('npm run build:styles');
    childProcess.on('data', (data) => console.log(data));
    childProcess.on('error', (err) => console.error(err));
    childProcess.on('exit', () => {
      bs.notify('New styles ready');
      bs.reload('*.css');
    });
  }
});

bs.watch(`${path.resolve(__dirname, '../..')}/ec-core/src/*.js`, (event) => {
  if (event === 'change') {
    bs.notify(
      `Change in ec-core preset javascript files, rebuilding scripts ...`
    );
    const childProcess = exec('npm run build:scripts');
    childProcess.on('data', (data) => console.log(data));
    childProcess.on('error', (err) => console.error(err));
    childProcess.on('exit', () => {
      bs.notify('New scripts ready');
      bs.reload('*.js');
    });
  }
});

bs.watch(
  `${path.resolve(__dirname, '../../..')}/implementations/vanilla/**/*.scss`,
  (event) => {
    if (event === 'change') {
      bs.notify(`Change in vanilla scss files, rebuilding styles ...`);
      const childProcess = exec('npm run build:styles');
      childProcess.on('data', (data) => console.log(data));
      childProcess.on('error', (err) => console.error(err));
      childProcess.on('exit', () => {
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
      bs.notify(`Change in vanilla javascript files, rebuilding scripts ...`);
      const childProcess = exec('npm run build:scripts');
      childProcess.on('data', (data) => console.log(data));
      childProcess.on('error', (err) => console.error(err));
      childProcess.on('exit', () => {
        bs.notify('New scripts ready');
        bs.reload('*.js');
      });
    }
  }
);

bs.watch(`${path.resolve(__dirname, '../../..')}/themes/**/*.scss`, (event) => {
  if (event === 'change') {
    bs.notify(`Change in theme scss files, rebuilding styles ...`);
    const childProcess = exec('npm run build:styles');
    childProcess.on('data', (data) => console.log(data));
    childProcess.on('error', (err) => console.error(err));
    childProcess.on('exit', () => {
      bs.notify('New styles ready');
      bs.reload('*.css');
    });
  }
});

bs.init({
  proxy: 'localhost:6006', // ec storybook
  open: false,
});

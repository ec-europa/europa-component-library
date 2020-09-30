#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const browserslist = require('browserslist');
const buildScript = require('../scripts/scripts');
const buildStyles = require('../scripts/styles');
const copyFiles = require('../scripts/copy');
const pkg = require('../package.json');

const loadConfig = (configFile) => {
  const conf = configFile || 'ecl-builder.config.js';
  return require(path.resolve(process.cwd(), conf)); // eslint-disable-line import/no-dynamic-require, global-require
};

program
  .version(pkg.version)
  .usage('ecl-builder [command] [option]')
  .option(
    '-c, --config [config_file]',
    'config file (default: ecl-builder.config.js)'
  );

program
  .command('browsers')
  .description('get browserslist stats')
  .action(() => {
    const browsers = browserslist();
    const coverage = browserslist.coverage(browsers, 'alt-eu');
    console.log(`
---- Browsers stats ----
Supported browsers: ${browsers.join(' ')}
These browsers account for ${coverage}% of all users in Europe
------------------------
`);
  });

program
  .command('scripts')
  .description('compile JS')
  .action(() => {
    const config = loadConfig(program.config);
    config.scripts.forEach((conf) =>
      buildScript(conf.entry, conf.dest, conf.options)
    );
  });

program
  .command('styles')
  .description('compile SCSS to CSS')
  .action(() => {
    const config = loadConfig(program.config);
    config.styles.forEach((conf) =>
      buildStyles(conf.entry, conf.dest, conf.options, config.themes)
    );
  });

program
  .command('copy')
  .description('copy static files')
  .action(() => {
    const config = loadConfig(program.config);
    config.copy.forEach((conf) =>
      copyFiles(conf.patterns || '**', conf.from, conf.to)
    );
  });

// If no arguments provided, display help menu.
if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parse(process.argv);
}

#!/usr/bin/env node

import path from 'node:path';
import { promises as fs } from 'node:fs';
import { program } from 'commander';
import browserslist from 'browserslist';
import buildScript from '../scripts/scripts.js';
import { buildStyles } from '../scripts/styles.js';
import copyFiles from '../scripts/copy.js';
import watchFiles from '../scripts/watch.js';

const pkg = JSON.parse(
  await fs.readFile(new URL('../package.json', import.meta.url), 'utf8'),
);

const loadConfig = async (configFile) => {
  const conf = configFile || 'ecl-builder.config.js';
  const configPath = path.resolve(process.cwd(), conf);
  try {
    const { default: config } = await import(`file://${configPath}`);
    return config;
  } catch (err) {
    throw new Error(`Failed to load config at ${configPath}: ${err.message}`);
  }
};

program
  .version(pkg.version)
  .usage('ecl-builder [command] [option]')
  .option(
    '-c, --config [config_file]',
    'config file (default: ecl-builder.config.js)',
  );

program
  .command('browsers')
  .description('get browserslist stats')
  .action(() => {
    const browsers = browserslist();
    const coverage = browserslist.coverage(browsers, 'alt-eu');
    console.log(`
---- Browsers stats ----
Supported browsers: ${browsers.join(', ')}
These browsers account for ${coverage}% of all users in Europe
------------------------
`);
  });

program
  .command('scripts')
  .description('compile JS')
  .action(async () => {
    const config = await loadConfig(program.opts().config);
    for (const conf of config.scripts) {
      await buildScript(conf.entry, conf.dest, conf.options);
    }
  });

program
  .command('styles')
  .description('compile SCSS to CSS')
  .action(async () => {
    const config = await loadConfig(program.opts().config);
    for (const conf of config.styles) {
      await buildStyles(conf.entry, conf.dest, conf.options);
    }
  });

program
  .command('copy')
  .description('copy static files')
  .action(async () => {
    const config = await loadConfig(program.opts().config);
    for (const conf of config.copy) {
      await copyFiles(conf.patterns || '**', conf.from, conf.to);
    }
  });

program
  .command('watch')
  .description('execute scripts on changes')
  .action(async () => {
    const config = await loadConfig(program.opts().config);
    if (config.watch) {
      watchFiles(config.watch);
    }
  });

// If no arguments provided, display help menu.
if (process.argv.slice(2).length <= 0) {
  program.help();
} else {
  program.parseAsync(process.argv);
}

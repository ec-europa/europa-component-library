const fs = require('fs');

module.exports = (options, config) => {
  if (!config.themes || !config.themes.module) {
    return console.log(
      'Irrelevant command. The configuration currently loaded for ecl-builder does not contain "themes" information.'
    );
  }

  const marker = `${config.themes.module}/index.scss`;

  if (options.set && typeof options.set !== 'boolean') {
    fs.writeFileSync(marker, `@import './${options.set}/index';`);
    return console.log(`Created ${marker} for: '${options.set}' theme.`);
  }

  if (options.remove) {
    if (fs.existsSync(marker)) {
      fs.unlinkSync(marker);
    }
    return console.log(`Removed ${marker}.`);
  }

  if (!fs.existsSync(marker)) {
    console.log(
      `${marker} is missing. There is no SCSS file set of generating themes. Please create one with and import to the theme you would like to generate code for. \n`
    );

    return console.log('Use --set option for setting a theme.');
  }

  return console.log(`Theme setting available at: ${marker}`);
};

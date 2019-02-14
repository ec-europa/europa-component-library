# ECL Builder

## Configuration

By default, ecl-builder will read the `ecl-builder.config.js` file at the root
of your project. You can use the `-c` or `--config` parameter if you want to
give your configuration file another name.

Typically, this is what it should look like:

```js
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Compile entry.js
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/entry.js'),
      dest: path.resolve(__dirname, 'dist/output.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'myModule',
      },
    },
  ],
  // Compile entry.scss
  styles: [
    {
      entry: path.resolve(__dirname, 'src/entry.scss'),
      dest: path.resolve(__dirname, 'dist/output.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  // Copy files from src to dest
  copy: [
    {
      from: path.resolve(__dirname, 'src/fonts'),
      to: path.resolve(__dirname, 'dist/fonts'),
    },
    {
      from: path.resolve(__dirname, 'src/images'),
      to: path.resolve(__dirname, 'dist/images'),
    },
  ],
};
```

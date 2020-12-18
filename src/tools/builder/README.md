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

## Watch mode

ECL builder provides a thin wrapper on top of browsersync for facilitating development workflows with the assets mentioned above.

Example configuration:

```javascript
{
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `./(dev|ec-core)/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'dev/ec-core presets scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
    ]
}
```

The object passed to `init` is merged with the same [method from browsersync](https://browsersync.io/docs/api#api-init). ECL uses the `proxy` option for it's storybook instances, but this could be any other application such as a Drupal website.

`handlers` define a list of event handlers spawning [`.watch()` tasks](https://browsersync.io/docs/api#api-watch).

The value for `on` property matches the [chokidar's events](https://github.com/paulmillr/chokidar#getting-started).

`reload` is optional. It's useful in handlers related to changes in styles (scss/css) which can be injected on the page without full page reload. Changes in all other file types result in browsersync's default behavior: full page reload.

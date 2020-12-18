const { exec } = require('child_process');
const browsersync = require('browser-sync');

module.exports = (options) => {
  const bs = browsersync.create(options.create);

  options.handlers.forEach((handler) => {
    bs.watch(handler.pattern, (event, file) => {
      handler.events.forEach((handlerEvent) => {
        if (handlerEvent.on === event) {
          bs.notify(`${event} ${file}`);
          const subprocess = exec(handlerEvent.command);
          subprocess.on('error', (err) =>
            bs.notify(
              `An error occured in ${handlerEvent.name}: ${err.message}`
            )
          );
          subprocess.on('exit', () => {
            bs.notify(handlerEvent.message);
            bs.reload(handlerEvent.reload);
          });
        }
      });
    });
  });

  bs.init(...{ open: false }, ...options.init);
};

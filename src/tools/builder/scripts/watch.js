const { spawn } = require('child_process');
const browsersync = require('browser-sync');

module.exports = (options) => {
  const bs = browsersync.create(options.create);

  options.handlers.forEach((handler) => {
    bs.watch(handler.pattern, (event, file) => {
      handler.events.forEach((handlerEvent) => {
        const { on, name, command, message, reload } = handlerEvent;

        if (on === event) {
          bs.notify(`${event} ${file}`);
          const args = command.split(' ');
          const cmd = args.shift();
          const subprocess = spawn(cmd, args, { stdio: 'inherit' });
          subprocess.on('error', (err) => bs.notify(`${name}: ${err.message}`));
          subprocess.on('exit', () => {
            bs.notify(message);
            if (reload) {
              bs.reload(reload);
            }
          });
        }
      });
    });
  });

  bs.init({ ...{ open: false, ...options.init } });
};

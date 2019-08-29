const contextLoggedIn = require('./data/demo--logged-in');
const contextLoggedOut = require('./data/demo--logged-out');

module.exports = {
  title: 'Login bar',
  label: 'Login bar',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [
    {
      name: 'logged-in',
      label: 'Logged in',
      context: contextLoggedIn,
    },
    {
      name: 'logged-out',
      label: 'Logged out',
      context: contextLoggedOut,
    },
  ],
  default: 'logged-in',
};

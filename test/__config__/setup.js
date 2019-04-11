const registerRequireContextHook = require('babel-plugin-require-context-hook/register');

jest.setTimeout(60000);
registerRequireContextHook();

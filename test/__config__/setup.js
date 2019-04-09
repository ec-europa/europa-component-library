const registerRequireContextHook = require('babel-plugin-require-context-hook/register');

jest.setTimeout(20000);
registerRequireContextHook();

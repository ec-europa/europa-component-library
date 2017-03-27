const generateTest = require('./helpers');

const variants = [
  'default',
  'primary',
  'secondary',
  'call',
  'call-border',
  'form',
  'light',
];

generateTest(variants, '/buttons-inputs', 'button-inputs');

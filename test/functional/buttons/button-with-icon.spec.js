const generateTest = require('./helpers');

const variants = [
  'arrow-down',
  'arrow-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
];

generateTest(variants, '/buttons-icons', 'buttons-icons');

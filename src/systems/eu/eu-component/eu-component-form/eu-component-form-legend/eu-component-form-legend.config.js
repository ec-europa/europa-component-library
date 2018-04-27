const contextLevel1 = require('@ecl/generic-component-form-legend/data/demo--level-1');
const contextLevel2 = require('@ecl/generic-component-form-legend/data/demo--level-2');

module.exports = {
  title: 'Legends',
  label: 'Legends',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  default: 'level-1',
  variants: [
    {
      name: 'level-1',
      label: 'Level 1',
      context: contextLevel1,
    },
    {
      name: 'level-2',
      label: 'Level 2',
      context: contextLevel2,
    },
  ],
};

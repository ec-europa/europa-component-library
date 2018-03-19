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
      context: {
        content: 'Legend for a top-level fieldset',
        level: 1,
      },
    },
    {
      name: 'level-2',
      label: 'Level 2',
      context: {
        content: 'Legend for a nested fieldset',
        level: 2,
      },
    },
  ],
};

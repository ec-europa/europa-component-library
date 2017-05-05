module.exports = {
  title: 'Banners',
  label: 'Banners',
  status: 'planned',
  collated: false,
  tags: ['molecule'],
  variants: [{
    name: 'quote',
    label: 'Quote',
    context: {
      modifier: 'quote',
    },
  }, {
    name: 'video',
    label: 'Video',
    context: {
      modifier: 'video',
    },
  }, {
    name: 'background',
    label: 'Background',
    context: {
      modifier: 'background',
    },
  }],
};

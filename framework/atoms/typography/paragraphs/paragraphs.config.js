module.exports = {
  title: 'Paragraphs',
  label: 'Paragraphs',
  status: 'ready',
  collated: false,
  default: 'intro',
  variants: [{
    name: 'intro',
    label: 'Intro',
    context: {
      modifier: 'paragraph--intro',
    },
  }, {
    name: 'small',
    label: 'Small body text',
    context: {
      modifier: 'paragraph--small',
    },
  }],
};

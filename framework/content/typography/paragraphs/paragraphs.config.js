module.exports = {
  title: 'Paragraphs',
  label: 'Paragraphs',
  status: 'ready',
  collated: true,
  default: 'intro',
  variants: [{
    name: 'intro',
    label: 'Intro',
    context: {
      modifier: 'ecl-paragraph--intro',
    },
  }, {
    name: 'default',
    label: 'Default',
    context: {
      modifier: '',
    },
  }, {
    name: 'small',
    label: 'Small body text',
    context: {
      modifier: 'ecl-paragraph--small',
    },
  }, {
    name: 'small',
    label: 'Extra Small body text',
    context: {
      modifier: 'ecl-text-small',
    },
  }],
};

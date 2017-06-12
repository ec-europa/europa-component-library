module.exports = {
  title: 'Expandables',
  label: 'Expandables',
  status: 'ready',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.getElementById('example-expandable-button-0').addEventListener(
          'click',
          function() { Europa.toggleExandable(this); }
        );
      `,
    },
  },
};

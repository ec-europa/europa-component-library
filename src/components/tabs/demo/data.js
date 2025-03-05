// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    {
      label: 'Tab label',
      path: exampleLink,
      is_current: true,
    },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
    { label: 'Tab label', path: exampleLink },
  ],
};

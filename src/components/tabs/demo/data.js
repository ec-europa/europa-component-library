// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    { label: 'Tab label', path: exampleLink, id: 'tabs-1' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-2' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-3' },
    {
      label: 'Tab label',
      path: exampleLink,
      is_current: true,
      id: 'tabs-4',
    },
    { label: 'Tab label', path: exampleLink, id: 'tabs-5' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-6' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-7' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-8' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-9' },
    { label: 'Tab label', path: exampleLink, id: 'tabs-10' },
  ],
};

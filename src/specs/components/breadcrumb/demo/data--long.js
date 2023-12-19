// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  links: [
    { label: 'Home', path: exampleLink },
    { label: 'Parent Page label', path: exampleLink },
    { label: 'Parent Page label', path: exampleLink },
    { label: 'Parent Page label', path: exampleLink },
    { label: 'Parent Page label', path: exampleLink },
    { label: 'Current Page Label' },
  ],
  navigation_text: 'You are here:',
  icon_path: '/icons.svg',
  ellipsis_label: 'Click to expand',
};

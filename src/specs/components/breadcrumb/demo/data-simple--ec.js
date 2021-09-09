// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  links: [
    { label: 'Home', path: exampleLink },
    { label: 'About the European Commission', path: exampleLink },
    { label: 'News' },
  ],
  navigation_text: 'You are here:',
  icon_file_path: '/icons.svg',
  ellipsis_label: 'Click to expand',
};

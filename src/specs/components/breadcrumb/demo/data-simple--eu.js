// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  links: [
    { label: 'Home', path: exampleLink },
    { label: 'About the European Union', path: exampleLink },
    { label: 'News' },
  ],
  navigation_text: 'You are here:',
  icon_file_path: '/icons.svg',
  icon_size: 'xs',
  ellipsis_label: 'Click to expand',
};

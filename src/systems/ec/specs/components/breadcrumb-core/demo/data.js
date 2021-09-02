// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    { label: 'Home', href: exampleLink },
    { label: 'About the European Commission', href: exampleLink },
    { label: 'Organisational structure', href: exampleLink },
    { label: 'How the Commission is organised', href: exampleLink },
    { label: 'News' },
  ],
  label: 'You are here:',
};

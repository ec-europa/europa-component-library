// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    { label: 'European Union', href: exampleLink },
    { label: 'About the European Union', href: exampleLink },
    { label: 'Organisational structure', href: exampleLink },
    { label: 'How the Union is organised', href: exampleLink },
    { label: 'News' },
  ],
  label: 'You are here:',
};

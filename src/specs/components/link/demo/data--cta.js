// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'cta',
    label: 'Call to action link',
    path: exampleLink,
    aria_label: 'Read more about the CTA link component',
  },
};

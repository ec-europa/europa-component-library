// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  link: {
    type: 'secondary-inverted',
    label: 'Link button',
    path: exampleLink,
    sr_external: 'Link to an external domain',
  },
};

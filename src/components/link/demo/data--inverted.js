// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  link: {
    label: 'The European Union',
    path: exampleLink,
    inverted: true,
    sr_external: 'Link to an external domain',
  },
};

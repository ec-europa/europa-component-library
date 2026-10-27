// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  link: {
    type: 'standalone',
    label: 'Standalone link',
    path: exampleLink,
    icon_position: 'after',
    sr_external: 'Link to an external domain',
  },
};

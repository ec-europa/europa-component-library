const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  tag: {
    type: 'link',
    path: exampleLink,
    label: 'Link tag',
  },
};

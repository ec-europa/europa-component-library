// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  border: true,
  items: [
    {
      border: true,
      icon: {
        name: 'energy',
        path: '/icons.svg',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 1',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
    },
    {
      border: true,
      icon: {
        name: 'presentation',
        path: '/icons.svg',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 2',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
    },
    {
      border: true,
      icon: {
        name: 'spinner',
        path: '/icons.svg',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 3',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
    },
  ],
};

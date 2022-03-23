// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        size: 'l',
      },
      title: {
        type: 'standalone',
        label: 'Title 1',
        path: exampleLink,
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
      links: [
        [
          { label: 'primary link 1', path: exampleLink },
          { label: 'primary link 2', path: exampleLink },
          { label: 'primary link 3', path: exampleLink },
          { label: 'primary link 4', path: exampleLink },
        ],
        [
          { label: 'secondary link 1', path: exampleLink },
          { label: 'secondary link 2', path: exampleLink },
        ],
      ],
    },
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        size: 'l',
      },
      title: {
        type: 'standalone',
        label: 'Title 2',
        path: exampleLink,
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
      links: [
        [
          { label: 'primary link 1', path: exampleLink },
          { label: 'primary link 2', path: exampleLink },
          { label: 'primary link 3', path: exampleLink },
          { label: 'primary link 4', path: exampleLink },
        ],
        [
          { label: 'secondary link 1', path: exampleLink },
          { label: 'secondary link 2', path: exampleLink },
        ],
      ],
    },
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        size: 'l',
      },
      title: {
        type: 'standalone',
        label: 'Title 3',
        path: exampleLink,
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
      links: [
        [
          { label: 'primary link 1', path: exampleLink },
          { label: 'primary link 2', path: exampleLink },
          { label: 'primary link 3', path: exampleLink },
          { label: 'primary link 4', path: exampleLink },
        ],
        [
          { label: 'secondary link 1', path: exampleLink },
          { label: 'secondary link 2', path: exampleLink },
        ],
      ],
    },
  ],
};

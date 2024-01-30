// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

const base64Src = `data:image/png;base64, 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`;

module.exports = {
  border: true,
  items: [
    {
      variant: 'illustration',
      border: true,
      picture: {
        img: {
          src: base64Src,
          alt: 'Alt text for the illustration',
        },
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
      variant: 'illustration',
      border: true,
      picture: {
        img: {
          src: base64Src,
          alt: 'Alt text for the illustration',
        },
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
      variant: 'illustration',
      border: true,
      picture: {
        img: {
          src: base64Src,
          alt: 'Alt text for the illustration',
        },
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

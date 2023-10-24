const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title:
    'Title: Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  description:
    '<p class="ecl-u-type-paragraph-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
  link: {
    link: {
      type: 'standalone',
      path: exampleLink,
      label: 'Standalone link',
      icon_position: 'after',
    },
    icon: {
      path: '/icons.svg',
      name: 'external',
      size: 'xs',
    },
  },
  media_container: {
    picture: {
      img: {
        alt: 'Lorem ipsum dolor sit amet',
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      },
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elite tempored incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing.<br />@Copyright',
  },
};

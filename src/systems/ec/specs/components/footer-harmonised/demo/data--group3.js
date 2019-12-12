// eslint-disable-next-line global-require, import/no-dynamic-require
const logoECSrc = require(`@ecl/ec-resources-logo/logo--en.svg`);

module.exports = {
  sections: [
    {
      key: 'section 1',
      title: {
        label: 'Joint partnership',
        href: '/example',
      },
      logos: [
        {
          title: 'Partnership 1',
          alt: 'Partnership 1 logo',
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        },
        {
          title: 'Partnership 2',
          alt: 'Partnership 2 logo',
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        },
        {
          title: 'European Commission',
          alt: 'European Commission logo',
          src: logoECSrc,
        },
      ],
    },
  ],
};

import adapter from '../adapter';
// The reason why we don't import the specs from ECL is that it contains an svg import
// that breaks our tests.
const specs = {
  sections: {
    partnershipLabel: {
      title: 'Joint partnership',
    },
    partnershipLogos: [
      {
        logo: {
          title: 'Partnership 1',
          alt: 'Partnership 1 logo',
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
        },
      },
      {
        logo: {
          title: 'Partnership 2',
          alt: 'Partnership 2 logo',
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
        },
      },
    ],
    ecLogo: {
      logo: {
        title: 'European Commission',
        alt: 'European Commission logo',
        src: '/logo--en.svg',
      },
    },
  },
};

specs.group = 'group3';

export default adapter(specs);

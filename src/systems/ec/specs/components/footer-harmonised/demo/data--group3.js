const logoECSrc = require(`@ecl/ec-resources-logo/logo--en.svg`);

module.exports = {
  sections: {
    partnershipLabel: {
      title: 'Joint partnership',
    },
    partnershipLogos: [
      {
        logo: {
          title: 'Partnership 1',
          alt: 'Partnership 1 logo',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
        },
      },
      {
        logo: {
          title: 'Partnership 2',
          alt: 'Partnership 2 logo',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
        },
      },
    ],
    ecLogo: {
      logo: {
        title: 'European Commission',
        alt: 'European Commission logo',
        src: logoECSrc,
      },
    },
  },
};

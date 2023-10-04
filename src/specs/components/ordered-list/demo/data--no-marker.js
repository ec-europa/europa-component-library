const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'no-marker',
  items: [
    {
      label: `<a class="ecl-link" href="${exampleLink}">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>`,
      nested: [
        {
          label: `<a class="ecl-link" href="${exampleLink}">Duis commodo nibh eget magna</a>`,
        },
        {
          label: `<a class="ecl-link" href="${exampleLink}">Phasellus suscipit</a>`,
        },
      ],
    },
    {
      label: `<a class="ecl-link" href="${exampleLink}">Nam dignissim condimentum pulvinar. Nullam volutpat tortor vel turpis iaculis feugiat. Vivamus eget turpis a est lacinia blandit</a>`,
    },
    {
      label: `<a class="ecl-link" href="${exampleLink}">Vestibulum sed accumsan ipsum</a>`,
      nested: [
        {
          label: `<a class="ecl-link" href="${exampleLink}">Morbi vitae tortor accumsan</a>`,
        },
        {
          label: `<a class="ecl-link" href="${exampleLink}">Nulla facilisi</a>`,
        },
        {
          label: `<a class="ecl-link" href="${exampleLink}">Phasellus in metus et libero scelerisque sagittis sollicitudin at lectus</a>`,
        },
      ],
    },
  ],
};

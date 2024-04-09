const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'no-marker',
  items: [
    {
      label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
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
      label: `Nam dignissim condimentum pulvinar. Nullam volutpat tortor vel turpis iaculis feugiat. Vivamus eget turpis a est lacinia blandit`,
    },
    {
      label: `Vestibulum sed accumsan ipsum`,
      nested: [
        {
          label: `<a class="ecl-link" href="${exampleLink}">Morbi vitae tortor accumsan</a>`,
        },
        {
          label: `Nulla facilisi`,
        },
        {
          label: `Phasellus in metus et libero scelerisque sagittis sollicitudin at lectus`,
        },
      ],
    },
  ],
};

const iconPath = require('@ecl/resources-icons/dist/sprites/icons.svg');

const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
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
          label: `<a href="${exampleLink}" class="ecl-link ecl-link--icon">
            <span class="ecl-link__label">Phasellus suscipit</span>
            <svg class="ecl-icon ecl-icon--2xs ecl-link__icon" focusable="false" aria-hidden="false" role="img">
              <title>Link to an external domain</title>
              <use xlink:href="${iconPath}#external"></use>
            </svg>
          </a>`,
        },
        {
          label: `<a class="ecl-link" href="${exampleLink}">Phasellus in metus et libero scelerisque sagittis sollicitudin at lectus</a>`,
        },
      ],
    },
  ],
};

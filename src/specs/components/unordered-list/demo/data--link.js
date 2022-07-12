const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Jobs, growth and investment</a>`,
      nested: [
        {
          label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Investment Plan for Europe: the Juncker Plan</a>`,
        },
        {
          label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">European Semester</a>`,
        },
      ],
    },
    {
      label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Digital single market</a>`,
    },
    {
      label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Energy union and climate</a>`,
      nested: [
        {
          label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Security, solidarity and trust</a>`,
        },
        {
          label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">A fully-integrated internal energy market</a>`,
        },
        {
          label: `<a class="ecl-link ecl-link--standalone" href="${exampleLink}">Energy efficiency</a>`,
        },
      ],
    },
  ],
};

const itemsDate = [
  {
    variant: 'date',
    date: {
      week_day: 'Tue',
      day: '07',
      month: 'Sep',
    },
    title:
      "Citizens' Dialogue in Bucharest with Commissioner Corina Crețu and the President of the European Committee of the Regions Karl-Heinz Lambertz",
    detail:
      '<small><span class="ecl-icon ecl-icon--location">Bucharest, Romania</span> <span class="ecl-icon ecl-icon--livestreaming ecl-u-ml-s">live streaming available</span></small>',
  },
  {
    variant: 'date',
    date: {
      week_day: 'Tue',
      day: '08',
      month: 'Sep',
    },
    title: "Citizens' Dialogue in Kraków with Commissioner Elżbieta Bieńkowska",
    detail:
      '<small><span class="ecl-icon ecl-icon--location">Kraków, Poland</span> <span class="ecl-icon ecl-icon--livestreaming ecl-u-ml-s">live streaming available</span></small>',
  },
];

module.exports = {
  title: 'Listings',
  label: 'Listings',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default listing',
    },
    {
      name: 'date',
      label: 'Date listing',
      context: {
        variant: 'date',
        items: itemsDate,
      },
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail listing',
      context: {
        variant: 'thumbnail',
      },
    },
  ],
};

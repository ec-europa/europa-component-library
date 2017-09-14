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
  {
    variant: 'date',
    date: {
      week_day: 'Tue',
      day: '14',
      month: 'Sep',
    },
    title: "Citizens' Dialogue in Tallin with Vice-President Jyrki Katainen",
    detail:
      '<small><span class="ecl-icon ecl-icon--location">Tallin, Estonia</span> <span class="ecl-icon ecl-icon--livestreaming ecl-u-ml-s">live streaming available</span></small>',
  },
];

const itemsDefault = [
  {
    title: 'Business, Economy, Euro',
    detail:
      'EU economy, the euro, and practical information for EU businesses and entrepreneurs.',
  },
  {
    title: 'About the European Union',
    detail: 'The EU and its institutions, how to visit and work at the EU.',
  },
  {
    title: 'Live, Work, Travel in EU',
    detail:
      'Advice on living, working or travelling in the EU, on visas and immigration for non-EU citizens, European culture.',
  },
  {
    title: 'Funding, Tenders',
    detail: 'EU funding, grants, tenders, and how to apply.',
  },
  {
    title: 'Law',
    detail:
      'EU law and judgments, how EU law is applied, public consultations, data protection, infringements, fraud, serious crime.',
  },
  {
    title: 'Research and innovation',
    detail:
      'Research funding, partners, results, and EU action to promote innovation.',
  },
];

const itemsThumbnails = [
  {
    metas: ['Director-General'],
    title: 'John Doe',
    primary_image: {
      src: 'http://lorempixel.com/output/business-q-c-160-160-10.jpg',
      alt: 'Director-General John Doe',
    },
  },
  {
    metas: ['Deputy Director-General'],
    title: 'Jane Doe',
    primary_image: {
      src: 'http://lorempixel.com/output/business-q-c-160-160-10.jpg',
      alt: 'Deputy Director-General Jane Doe',
    },
  },
  {
    metas: ['Acting Deputy Director-General'],
    title: 'Jack Doe',
    primary_image: {
      src: 'http://lorempixel.com/output/business-q-c-160-160-10.jpg',
      alt: 'Acting Deputy Director-General Jack Doe',
    },
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
  default: 'one-column',
  variants: [
    {
      name: 'one-column',
      label: 'One column listing',
      context: {
        items: itemsDate,
      },
    },
    {
      name: 'two-columns',
      label: 'Two columns listing',
      context: {
        variant: 'two-columns',
        items: itemsThumbnails,
      },
    },
    {
      name: 'three-columns',
      label: 'Three columns listing',
      context: {
        variant: 'three-columns',
        items: itemsDefault,
      },
    },
  ],
};

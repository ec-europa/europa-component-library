const itemsDate = [
  {
    variant: 'date',
    date: {
      week_day: 'Tue',
      day: '07',
      month: 'Sep',
    },
    href: '../../example.html#listing-date-1',
    screen_reader: 'Event 07/09, Bucharest, Romania',
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
    href: '../../example.html#listing-date-2',
    screen_reader: 'Event 08/09, Kraków, Poland',
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
    href: '../../example.html#listing-date-3',
    screen_reader: 'Event 14/09, Tallin, Estonia',
    title: "Citizens' Dialogue in Tallin with Vice-President Jyrki Katainen",
    detail:
      '<small><span class="ecl-icon ecl-icon--location">Tallin, Estonia</span> <span class="ecl-icon ecl-icon--livestreaming ecl-u-ml-s">live streaming available</span></small>',
  },
];

const itemsDefault = [
  {
    screen_reader: 'List item: Business, Economy, Euro',
    title: 'Business, Economy, Euro',
    href: '../../example.html#listing-three-columns-1',
    detail:
      'EU economy, the euro, and practical information for EU businesses and entrepreneurs.',
  },
  {
    screen_reader: 'List item: About the European Union',
    title: 'About the European Union',
    href: '../../example.html#listing-three-columns-2',
    detail: 'The EU and its institutions, how to visit and work at the EU.',
  },
  {
    screen_reader: 'List item: Live, Work, Travel in EU',
    title: 'Live, Work, Travel in EU',
    href: '../../example.html#listing-three-columns-3',
    detail:
      'Advice on living, working or travelling in the EU, on visas and immigration for non-EU citizens, European culture.',
  },
  {
    screen_reader: 'List item: Funding, Tenders',
    title: 'Funding, Tenders',
    href: '../../example.html#listing-three-columns-4',
    detail: 'EU funding, grants, tenders, and how to apply.',
  },
  {
    screen_reader: 'List item: Law',
    title: 'Law',
    href: '../../example.html#listing-three-columns-5',
    detail:
      'EU law and judgments, how EU law is applied, public consultations, data protection, infringements, fraud, serious crime.',
  },
  {
    screen_reader: 'List item: Research and innovation',
    title: 'Research and innovation',
    href: '../../example.html#listing-three-columns-6',
    detail:
      'Research funding, partners, results, and EU action to promote innovation.',
  },

  {
    variant: 'highlight',
    screen_reader: 'List item: State of the European Union 2017',
    title: 'State of the European Union 2017',
    primary_image: {
      src: '../../assets/demo_images/nature-demo-1.jpg',
      alt: 'State of the European Union 2017',
    },
  },
  {
    variant: 'highlight',
    screen_reader: 'List item: White paper on the future of Europe',
    title: 'White paper on the future of Europe',
    primary_image: {
      src: '../../assets/demo_images/nature-demo-2.jpg',
      alt: 'White paper on the future of Europe',
    },
  },
  {
    variant: 'highlight',
    screen_reader: 'List item: EU solidarity',
    title: 'EU solidarity',
    primary_image: {
      src: '../../assets/demo_images/nature-demo-3.jpg',
      alt: 'EU solidarity',
    },
  },
];

const itemsThumbnails = [
  {
    metas: ['Director-General'],
    screen_reader: 'List item: Director-General John Doe',
    title: 'John Doe',
    href: '../../example.html#listing-thumb-1',
    primary_image: {
      src: '../../assets/demo_images/default_profile_image.png',
      alt: 'Director-General John Doe',
    },
  },
  {
    metas: ['Deputy Director-General'],
    screen_reader: 'List item: Deputy Director-General Jane Doe',
    title: 'Jane Doe',
    href: '../../example.html#listing-thumb-2',
    primary_image: {
      src: '../../assets/demo_images/default_profile_image.png',
      alt: 'Deputy Director-General Jane Doe',
    },
  },
  {
    metas: ['Acting Deputy Director-General'],
    screen_reader: 'List item: Acting Deputy Director-General Jack Doe',
    title: 'Jack Doe',
    href: '../../example.html#listing-thumb-3',
    primary_image: {
      src: '../../assets/demo_images/default_profile_image.png',
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

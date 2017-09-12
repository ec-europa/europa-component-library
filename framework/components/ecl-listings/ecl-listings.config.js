const itemsMultiple = [
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

const itemsDefault = [
  {
    metas: ['Service department', 'PMO'],
    title: 'Administration and Payment of Individual Entitlements',
  },
  {
    metas: ['Directorate-General', 'AGRI'],
    title: 'Agriculture and Rural Development',
  },
  {
    metas: ['Directorate-General', 'BUDG'],
    title: 'Budget',
  },
  {
    metas: ['Directorate-General', 'CLIMA'],
    title: 'Climate Action',
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
        items: itemsDefault,
      },
    },
    {
      name: 'two-columns',
      label: 'Two columns listing',
      context: {
        variant: 'two-columns',
        items: itemsMultiple,
      },
    },
    {
      name: 'three-columns',
      label: 'Three columns listing',
      context: {
        variant: 'three-columns',
        items: itemsMultiple,
      },
    },
  ],
};

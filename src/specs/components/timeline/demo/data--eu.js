// Simple content for demo
module.exports = {
  toggle_collapsed: 'Show %d more items',
  toggle_expanded: 'Hide %d items',
  hide: {
    from: 5,
    to: -2,
  },
  button: {
    label: 'Show all timeline',
    icon: {
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-180',
    },
    variant: 'secondary',
    type: 'button',
  },
  icon_path: '/icon.svg',
  items: [
    {
      id: '0',
      label: '1995 - 1996',
      title: 'Item title',
      content: "President Juncker's State of the Union speech",
    },
    {
      id: '1',
      label: '1996 - 1997',
      content: 'Informal Digital Summit, Tallinn',
    },
    {
      id: '2',
      label: '1997 - 1998',
      content:
        "Strengthening European identity through education and culture: European Commission's contribution to the Leaders' meeting, Gothenburg, Sweden",
    },
    {
      id: '3',
      label: '1998 - 1999',
      content:
        '<a href="/example" class="ecl-link">Social Summit in Gothenburg, Sweden</a>',
    },
    {
      id: '4',
      label: '1999 - 2000',
      content: 'Economic and Monetary Union package of proposals',
    },
    {
      id: '5',
      label: '2000 - 2001',
      content: "EU Leaders' meeting on migration, Brussels",
    },
    {
      id: '6',
      label: '2001 - 2002',
      content: '<a href="/example" class="ecl-link">Euro Summit</a>',
    },
    {
      id: '7',
      label: '2002 - 2003',
      content: 'EU-Western Balkans Strategy',
    },
    {
      id: '8',
      label: '2003 - 2004',
      content:
        'Multiannual Financial Framework and institutional issues enhancing efficiency at the helm of the European Union',
    },
    {
      id: '9',
      label: '2004 - 2005',
      content: 'Informal European Council',
    },
    {
      id: '10',
      label: '2005 - 2006',
      content: 'European Council',
    },
    {
      id: '11',
      label: '2006 - 2007',
      content:
        '<a href="/example" class="ecl-link">Commission proposal: Long-term budget post-2020</a>',
    },
    {
      id: '12',
      label: '2007 - 2008',
      content:
        "European Commission’s contribution to the Informal Leaders' meeting, Sofia, Bulgaria (16 May 2018)",
    },
    {
      id: '13',
      label: '2008 - 2009',
      content: 'EU-Western Balkans Summit (Sofia, Bulgaria)',
    },
    {
      id: '14',
      label: '2009 - 2010',
      content:
        'Progress by Member States in meeting the conditions for adopting the euro - <a href="/example" class="ecl-link">reports</a> by the European Commission and ECB',
    },
    {
      id: '15',
      label: '2010 -2011',
      content:
        'European Semester: European Commission publishes economic policy guidance for Member States',
    },
  ],
};

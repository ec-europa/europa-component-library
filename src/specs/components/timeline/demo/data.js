const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  toggle_collapsed: 'Show %d more items',
  toggle_expanded: 'Hide %d items',
  hide: {
    from: 5,
    to: -2,
  },
  icon_path: '/icon.svg',
  items: [
    {
      label: '1995 - 1996',
      title: 'Item title',
      content: "President Juncker's State of the Union speech",
    },
    {
      label: '1996 - 1997',
      content: 'Informal Digital Summit, Tallinn',
    },
    {
      label: '1997 - 1998',
      content:
        "Strengthening European identity through education and culture: European Commission's contribution to the Leaders' meeting, Gothenburg, Sweden",
    },
    {
      label: '1998 - 1999',
      content: `<a href="${exampleLink}" class="ecl-link">Social Summit in Gothenburg, Sweden</a>`,
    },
    {
      label: '1999 - 2000',
      content: 'Economic and Monetary Union package of proposals',
    },
    {
      label: '2000 - 2001',
      content: "EU Leaders' meeting on migration, Brussels",
    },
    {
      label: '2001 - 2002',
      content: `<a href="${exampleLink}" class="ecl-link">Euro Summit</a>`,
    },
    {
      label: '2002 - 2003',
      content: 'EU-Western Balkans Strategy',
    },
    {
      label: '2003 - 2004',
      content:
        'Multiannual Financial Framework and institutional issues enhancing efficiency at the helm of the European Union',
    },
    {
      label: '2004 - 2005',
      content: 'Informal European Council',
    },
    {
      label: '2005 - 2006',
      content: 'European Council',
    },
    {
      label: '2006 - 2007',
      content: `<a href="${exampleLink}" class="ecl-link">Commission proposal: Long-term budget post-2020</a>`,
    },
    {
      label: '2007 - 2008',
      content:
        "European Commission’s contribution to the Informal Leaders' meeting, Sofia, Bulgaria (16 May 2018)",
    },
    {
      label: '2008 - 2009',
      content: 'EU-Western Balkans Summit (Sofia, Bulgaria)',
    },
    {
      label: '2009 - 2010',
      content: `Progress by Member States in meeting the conditions for adopting the euro - <a href="${exampleLink}" class="ecl-link">reports</a> by the European Commission and ECB`,
    },
    {
      label: '2010 -2011',
      content:
        'European Semester: European Commission publishes economic policy guidance for Member States',
    },
  ],
};

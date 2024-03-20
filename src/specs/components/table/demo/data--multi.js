module.exports = {
  id: 'table-id',
  headers: [
    [
      { label: 'Job title', rowspan: '2' },
      { label: 'EFSI finance approved by EIB', rowspan: '2' },
      { label: 'Extra information', colspan: '2' },
      { label: 'Location', rowspan: '2' },
    ],
    [
      { label: 'Organization', headers: 'table-id-3' },
      { label: 'Type of contract', headers: 'table-id-3' },
    ],
  ],
  rows: [
    {
      data: [
        {
          label: 'Administators in Competition Law',
          'data-ecl-table-header': 'Job title',
          headers: 'table-id-1',
        },
        {
          label: 'AD7',
          'data-ecl-table-header': 'EFSI finance approved by EIB',
          headers: 'table-id-2',
        },
        {
          label: 'European Commission',
          'data-ecl-table-header': 'Organization',
          'data-ecl-table-header-group': 'Extra information',
          group: true,
          headers: 'table-id-3 table-id-5',
        },
        {
          label: 'Permanent official',
          'data-ecl-table-header': 'Type of contract',
          group: true,
          headers: 'table-id-3 table-id-6',
        },
        {
          label:
            'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
          'data-ecl-table-header': 'Location',
          headers: 'table-id-4',
        },
      ],
    },
    {
      data: [
        {
          label: 'Administators in Economic and Monetary Union Law',
          'data-ecl-table-header': 'Job title',
          headers: 'table-id-1',
        },
        {
          label: 'AD7',
          'data-ecl-table-header': 'EFSI finance approved by EIB',
          headers: 'table-id-2',
        },
        {
          label: 'European Commission',
          'data-ecl-table-header': 'Organization',
          'data-ecl-table-header-group': 'Extra information',
          group: true,
          headers: 'table-id-3 table-id-5',
        },
        {
          label: 'Permanent official',
          'data-ecl-table-header': 'Type of contract',
          group: true,
          headers: 'table-id-3 table-id-6',
        },
        {
          label:
            'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
          'data-ecl-table-header': 'Location',
          headers: 'table-id-4',
        },
      ],
    },
    {
      data: [
        {
          label: 'Administators in Financial rules appliable to the EU budget',
          'data-ecl-table-header': 'Job title',
          headers: 'table-id-1',
        },
        {
          label: 'AD7',
          'data-ecl-table-header': 'EFSI finance approved by EIB',
          headers: 'table-id-2',
        },
        {
          label: 'European Commission',
          'data-ecl-table-header': 'Organization',
          'data-ecl-table-header-group': 'Extra information',
          group: true,
          headers: 'table-id-3 table-id-5',
        },
        {
          label: 'Permanent official',
          'data-ecl-table-header': 'Type of contract',
          group: true,
          headers: 'table-id-3 table-id-6',
        },
        {
          label:
            'Brussels (Belgium), Luxembourg (Luxembourg), Strasbourg (France)',
          'data-ecl-table-header': 'Location',
          headers: 'table-id-4',
        },
      ],
    },
    {
      data: [
        {
          label: 'Corporate Support Officer',
          'data-ecl-table-header': 'Job title',
          headers: 'table-id-1',
        },
        {
          label: 'FG IV',
          'data-ecl-table-header': 'EFSI finance approved by EIB',
          headers: 'table-id-2',
        },
        {
          label: 'European Commission',
          'data-ecl-table-header': 'Organization',
          'data-ecl-table-header-group': 'Extra information',
          group: true,
          headers: 'table-id-3 table-id-5',
        },
        {
          label: 'Permanent official',
          'data-ecl-table-header': 'Type of contract',
          group: true,
          headers: 'table-id-3 table-id-6',
        },
        {
          label: 'Prague (Czech Republic)',
          'data-ecl-table-header': 'Location',
          headers: 'table-id-4',
        },
      ],
    },
    {
      data: [
        {
          label: 'Policy Officer - Clean Energy For All Europeans',
          'data-ecl-table-header': 'Job title',
          headers: 'table-id-1',
        },
        {
          label: 'FG II, FG III, FG IV',
          'data-ecl-table-header': 'EFSI finance approved by EIB',
          headers: 'table-id-2',
        },
        {
          label: 'EU-LISA',
          'data-ecl-table-header': 'Organization',
          'data-ecl-table-header-group': 'Extra information',
          group: true,
          headers: 'table-id-3 table-id-5',
        },
        {
          label: 'Seconded National Expert (SNE)',
          'data-ecl-table-header': 'Type of contract',
          group: true,
          headers: 'table-id-3 table-id-6',
        },
        {
          label: 'Vigo (Spain)',
          'data-ecl-table-header': 'Location',
          headers: 'table-id-4',
        },
      ],
    },
  ],
};

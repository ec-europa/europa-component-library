module.exports = {
  headers: [
    [
      { label: 'Name' },
      { label: 'Registration date' },
      { label: 'Languages', colspan: '3' },
    ],
    [
      { label: '' },
      { label: '' },
      { label: 'English' },
      { label: 'French' },
      { label: 'German' },
    ],
  ],
  rows: [
    [
      { label: 'John', 'data-ecl-table-header': 'Name' },
      {
        label: 'September 14, 2013',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'English',
        'data-ecl-table-header-group': 'Language',
        group: true,
      },
      {
        label: 'No',
        'data-ecl-table-header': 'French',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'German',
        group: true,
      },
    ],
    [
      { label: 'Ron', 'data-ecl-table-header': 'Name' },
      {
        label: 'October 23, 2014',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'English',
        'data-ecl-table-header-group': 'Language',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'French',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'German',
        group: true,
      },
    ],
    [
      { label: 'Albert', 'data-ecl-table-header': 'Name' },
      {
        label: 'December 13, 2014',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: 'No',
        'data-ecl-table-header': 'English',
        'data-ecl-table-header-group': 'Language',
        group: true,
      },
      {
        label: 'No',
        'data-ecl-table-header': 'French',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'German',
        group: true,
      },
    ],
    [
      { label: 'Marcel', 'data-ecl-table-header': 'Name' },
      {
        label: 'January 12, 1995',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'English',
        'data-ecl-table-header-group': 'Language',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'French',
        group: true,
      },
      {
        label: 'Yes',
        'data-ecl-table-header': 'German',
        group: true,
      },
    ],
  ],
};

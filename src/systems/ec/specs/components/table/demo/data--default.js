module.exports = {
  headers: [
    [{ label: 'Name' }, { label: 'Registration date' }, { label: 'Email' }],
  ],
  rows: [
    [
      { label: 'John', 'data-ecl-table-header': 'Name' },
      {
        label: 'September 14, 2013',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: '<a href="/example" class="ecl-link">john@example.com</a>',
        'data-ecl-table-header': 'Email',
      },
    ],
    [
      { label: 'Ron', 'data-ecl-table-header': 'Name' },
      {
        label: 'October 23, 2014',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: '<a href="/example" class="ecl-link">ron@example.com</a>',
        'data-ecl-table-header': 'Email',
      },
    ],
    [
      { label: 'Albert', 'data-ecl-table-header': 'Name' },
      {
        label: 'December 13, 2014',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: '<a href="/example" class="ecl-link">albert@example.com</a>',
        'data-ecl-table-header': 'Email',
      },
    ],
    [
      { label: 'Marcel', 'data-ecl-table-header': 'Name' },
      {
        label: 'January 12, 1995',
        'data-ecl-table-header': 'Registration date',
      },
      {
        label: '<a href="/example" class="ecl-link">marcel@example.com</a>',
        'data-ecl-table-header': 'Email',
      },
    ],
  ],
};

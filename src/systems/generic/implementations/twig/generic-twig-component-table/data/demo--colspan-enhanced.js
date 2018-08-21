module.exports = {
  extra_classes: 'ecl-table--responsive',
  headers: [
    [
      { label: 'Name', attributes: 'rowspan="2"' },
      { label: 'Registration date', attributes: 'rowspan="2"' },
      { label: 'Language', attributes: 'colspan="3"' },
    ],
    [{ label: 'English' }, { label: 'French' }, { label: 'German' }],
  ],
  rows: [
    [
      { label: 'John Doe' },
      { label: '01/01/2016' },
      { label: 'yes' },
      { label: 'no' },
      { label: 'no' },
    ],
    [
      { label: 'Jane Doe' },
      { label: '06/12/2016' },
      { label: 'no' },
      { label: 'yes' },
      { label: 'yes' },
    ],
    [
      { label: 'Jack Doe' },
      { label: '03/05/2017' },
      { label: 'yes' },
      { label: 'no' },
      { label: 'no' },
    ],
  ],
};

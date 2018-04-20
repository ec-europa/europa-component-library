module.exports = {
  headers: [
    [{ label: '' }, { label: 'Registration date' }, { label: 'Email' }],
  ],
  rows: [
    [
      { label: 'John Doe' },
      { label: '01/01/2016' },
      {
        label:
          '<a class="ecl-link" href="mailto:john.doe@mail.com">john.doe@mail.com</a>',
      },
    ],
    [
      { label: 'Jane Doe' },
      { label: '06/12/2016' },
      {
        label:
          '<a class="ecl-link" href="mailto:jane.doe@mail.com">jane.doe@mail.com</a>',
      },
    ],
    [
      { label: 'Jack Doe' },
      { label: '03/05/2017' },
      {
        label:
          '<a class="ecl-link" href="mailto:jack.doe@mail.com">jack.doe@mail.com</a>',
      },
    ],
  ],
};

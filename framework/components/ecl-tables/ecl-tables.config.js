module.exports = {
  title: 'Tables',
  label: 'Tables',
  status: 'ready',
  variants: [
    {
      name: 'default',
      label: 'Default table',
      context: {
        headers: [
          [
            { label: 'Name' },
            { label: 'Registration date' },
            { label: 'Email' },
          ],
        ],
        rows: [
          [
            { label: 'John Doe' },
            { label: '01/01/2016' },
            {
              label: '<a href="mailto:john.doe@mail.com">john.doe@mail.com</a>',
            },
          ],
          [
            { label: 'Jane Doe' },
            { label: '06/12/2016' },
            {
              label: '<a href="mailto:jane.doe@mail.com">jane.doe@mail.com</a>',
            },
          ],
          [
            { label: 'Jack Doe' },
            { label: '03/05/2017' },
            {
              label: '<a href="mailto:jack.doe@mail.com">jack.doe@mail.com</a>',
            },
          ],
        ],
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'empty',
      label: 'Table with empty heading',
      context: {
        headers: [
          [{ label: '' }, { label: 'Registration date' }, { label: 'Email' }],
        ],
        rows: [
          [
            { label: 'John Doe' },
            { label: '01/01/2016' },
            {
              label: '<a href="mailto:john.doe@mail.com">john.doe@mail.com</a>',
            },
          ],
          [
            { label: 'Jane Doe' },
            { label: '06/12/2016' },
            {
              label: '<a href="mailto:jane.doe@mail.com">jane.doe@mail.com</a>',
            },
          ],
          [
            { label: 'Jack Doe' },
            { label: '03/05/2017' },
            {
              label: '<a href="mailto:jack.doe@mail.com">jack.doe@mail.com</a>',
            },
          ],
        ],
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'colspan',
      label: 'Table with colspan',
      context: {
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
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'colspan-empty',
      label: 'Table with colspan and empty heading',
      context: {
        headers: [
          [
            { label: '', attributes: 'rowspan="2"' },
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
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
  ],
  default: 'default',
};

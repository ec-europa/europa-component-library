module.exports = {
  title: 'Tables',
  label: 'Tables',
  status: 'ready',
  tags: ['atom'],
  preview: '@preview-tables',
  collated: true,
  default: 'one_header',
  variants: [{
    name: 'one_header',
    label: 'Simple Table: one header',
    context: {
      caption: '',
      headers: [{
        col: '1',
        subcol: [],
      }, {
        col: '2',
        subcol: [],
      }, {
        col: '3',
        subcol: [],
      }],
      number_sub_col: 3,
      number_sub_row: 3,
    },
  }, {
    name: 'one_header_with_caption',
    label: 'Simple Table: one header with caption',
    context: {
      caption: 'Caption Text',
      headers: [{
        col: '1',
        subcol: [],
      }, {
        col: '2',
        subcol: [],
      }, {
        col: '3',
        subcol: [],
      }],
      number_sub_col: 3,
      number_sub_row: 3,
    },
  }, {
    name: 'one_header with an empty heading',
    label: 'Simple Table: one header with caption',
    context: {
      caption: '',
      headers: [{
        col: '',
        subcol: [],
      }, {
        col: '2',
        subcol: [],
      }, {
        col: '3',
        subcol: [],
      }],
      number_sub_col: 3,
      number_sub_row: 3,
    },
  }, {
    name: 'two_header_case_1',
    label: 'Table: two headers case 1',
    context: {
      caption: '',
      headers: [{
        col: '1',
        subcol: [],
      }, {
        col: '2',
        subcol: [],
      }, {
        col: '3',
        subcol: [{
            col: '1'
        }, {
            col: '2'
        }, {
            col: '3'
        }],
      }],
      number_sub_col: 5,
      number_sub_row: 3,
    },
  }, {
    name: 'two_header_case_2',
    label: 'Table: two headers case 2',
    context: {
      caption: '',
      headers: [{
        col: '1',
        subcol: [{
            col: '1'
        }, {
            col: '2'
        }],
      }, {
        col: '2',
        subcol: [],
      }, {
        col: '3',
        subcol: [],
      }],
      number_sub_col: 4,
      number_sub_row: 3,
    },
  }, {
    name: 'two_header_case_3',
    label: 'Table: two headers case 3',
    context: {
      caption: '',
      headers: [{
        col: '1',
        subcol: [],
      }, {
        col: '2',
        subcol: [{
            col: '1'
        }, {
            col: '2'
        }],
      }, {
        col: '3',
        subcol: [],
      }],
      number_sub_col: 4,
      number_sub_row: 3,
    },
  }]
};

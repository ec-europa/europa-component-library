module.exports = {
  title: 'Headlines and headings',
  label: 'Headlines and headings',
  status: 'ready',
  order: 2,
  collated: true,
  default: 'h1',
  variants: [
    {
      name: 'h1',
      label: 'h1',
      context: {
        element: 'h1',
        class: 'ecl-heading ecl-heading--h1',
        text: 'Heading <h1> with class ecl-heading ecl-heading--h1',
      },
    },
    {
      name: 'h2',
      label: 'h2',
      context: {
        element: 'h2',
        class: 'ecl-heading ecl-heading--h2',
        text: 'Heading <h2> with class ecl-heading ecl-heading--h2',
      },
    },
    {
      name: 'h3',
      label: 'h3',
      context: {
        element: 'h3',
        class: 'ecl-heading ecl-heading--h3',
        text: 'Heading <h3> with class ecl-heading ecl-heading--h3',
      },
    },
    {
      name: 'h4',
      label: 'h4',
      context: {
        element: 'h4',
        class: 'ecl-heading ecl-heading--h4',
        text: 'Heading <h4> with class ecl-heading ecl-heading--h4',
      },
    },
    {
      name: 'h5',
      label: 'h5',
      context: {
        element: 'h5',
        class: 'ecl-heading ecl-heading--h5',
        text: 'Heading <h5> with class ecl-heading ecl-heading--h5',
      },
    },
    {
      name: 'headline',
      label: 'headline',
      context: {
        element: 'div',
        class: 'ecl-heading ecl-heading--headline',
        style: 'background-color: #004494',
        text:
          'Headline with class ecl-heading ecl-heading--headline and background',
      },
    },
  ],
};

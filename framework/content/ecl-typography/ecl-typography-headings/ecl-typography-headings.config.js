module.exports = {
  title: 'Headings',
  label: 'Headings',
  status: 'ready',
  collated: true,
  default: 'headline',
  variants: [
    {
      name: 'headline',
      label: 'headline',
      context: {
        element: 'div',
        class: 'ecl-h ecl-h--headline',
        style: 'background-color: #004494',
        text: 'Headline with class .ecl-headline and background',
      },
    },
    {
      name: 'h1',
      label: 'h1',
      context: {
        element: 'h1',
        class: 'ecl-h ecl-h--h1',
        text: 'Heading <h1> with class .ecl-h1',
      },
    },
    {
      name: 'h2',
      label: 'h2',
      context: {
        element: 'h2',
        class: 'ecl-h ecl-h--h2',
        text: 'Heading <h2> with class .ecl-h2',
      },
    },
    {
      name: 'h3',
      label: 'h3',
      context: {
        element: 'h3',
        class: 'ecl-h ecl-h--h3',
        text: 'Heading <h3> with class .ecl-h3',
      },
    },
    {
      name: 'h4',
      label: 'h4',
      context: {
        element: 'h4',
        class: 'ecl-h ecl-h--h4',
        text: 'Heading <h4> with class .ecl-h4',
      },
    },
    {
      name: 'h5',
      label: 'h5',
      context: {
        element: 'h5',
        class: 'ecl-h ecl-h--h5',
        text: 'Heading <h5> with class .ecl-h5',
      },
    },
  ],
};

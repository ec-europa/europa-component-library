module.exports = {
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      alt: 'Infography alt text',
    },
  },
  description: 'Infography title and copyright',
  expandable: {
    id: 'expandable-example',
    button: {
      label: 'Collapsed',
      variant: 'secondary',
      icon: {
        name: 'corner-arrow',
        transform: 'rotate-180',
        size: 'fluid',
        path: '/icons.svg',
      },
    },
    label_expanded: 'Expanded',
    label_collapsed: 'Collapsed',
    content:
      '<p class="ecl-u-type-paragraph-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et varius est. Sed elementum rutrum libero, at vulputate nisl posuere et. Morbi dui sem, rhoncus non fermentum eget, finibus non purus.</p>',
  },
};

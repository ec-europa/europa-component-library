module.exports = function context(system) {
  const c = {
    rows: [
      [
        {
          classes: 'ecl-col-md-4',
          image: {
            src: 'http://placehold.it/380x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '380' },
              { name: 'height', value: '185' },
            ],
          },
          caption: 'Example image caption',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'video',
            size: 'm',
          },
        },
        {
          classes: 'ecl-col-md-3',
          image: {
            src: 'http://placehold.it/285x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '285' },
              { name: 'height', value: '185' },
            ],
          },
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'audio',
            size: 'm',
          },
        },
        {
          classes: 'ecl-col-md-2',
          image: {
            src: 'http://placehold.it/190x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '190' },
              { name: 'height', value: '185' },
            ],
          },
          caption: 'Example image caption',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'video',
            size: 'm',
          },
        },
        {
          classes: 'ecl-col-md-3',
          image: {
            src: 'http://placehold.it/285x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '285' },
              { name: 'height', value: '185' },
            ],
          },
        },
      ],
      [
        {
          classes: 'ecl-col-md-2',
          image: {
            src: 'http://placehold.it/190x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '190' },
              { name: 'height', value: '185' },
            ],
          },
          caption: 'Example image caption',
        },
        {
          classes: 'ecl-col-md-3',
          image: {
            src: 'http://placehold.it/285x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '285' },
              { name: 'height', value: '185' },
            ],
          },
        },
        {
          classes: 'ecl-col-md-3',
          image: {
            src: 'http://placehold.it/285x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '285' },
              { name: 'height', value: '185' },
            ],
          },
        },
        {
          classes: 'ecl-col-md-4',
          image: {
            src: 'http://placehold.it/380x185',
            alt: 'Example alt text',
            extra_attributes: [
              { name: 'typeof', value: 'foaf:Image' },
              { name: 'width', value: '380' },
              { name: 'height', value: '185' },
            ],
          },
          caption: 'Example image caption',
        },
      ],
    ],
  };

  return c;
};

const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Consectetur adipiscing elit',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus, <a class="ecl-link" href="${exampleLink}">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.`,
  meta: [
    'News article',
    '10 March 2025',
    {
      label: 'Brussels',
      icon: {
        name: 'location',
      },
    },
    {
      label: '1 minute read',
      icon: {
        name: 'clock',
      },
    },
    'Research Center',
  ],
  picture_thumbnail: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Europe flag',
    },
  },
  picture_background: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Europe flag',
    },
  },
  expandable: {
    panel_id: 'page-header-expandable-panel-demo',
    toggle_label: 'expandable button',
    toggle_extra_attributes: [{ name: 'data-test-custom-toggle-attribute' }],
    header_content:
      '<strong>LOREM IPSUM</strong> - dolor sit amet, consectetur <a class="ecl-link" href="/example">adipiscing</a> elit.',
    panel_content: `<ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Morbi faucibus justo eget ante hendrerit sagittis
        <ul>
          <li>consectetur adipiscing</li>
          <li>Maecenas non convallis dolor</li>
        </ul>
      </li>
      <li>Integer dignissim imperdiet</li>
    </ul>`,
  },
};

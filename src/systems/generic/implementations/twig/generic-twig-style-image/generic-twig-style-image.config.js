module.exports = {
  title: 'Images',
  label: 'Images',
  status: 'ready',
  order: 4,
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'img',
  variants: [
    {
      name: 'img',
      label: 'Using &lt;img&gt; tag',
      context: {
        src: '../../assets/demo_images/nature-demo-1.jpg',
        alt: 'This is a test image',
        responsive: true,
      },
    },
    {
      name: 'picture',
      label: 'Using &lt;picture&gt; tag',
      context: {
        srcs: {
          xs: '../../assets/demo_images/400x300.png',
          sm: '../../assets/demo_images/640x480.png',
          md: '../../assets/demo_images/800x600.png',
          lg: '../../assets/demo_images/1024x768.png',
          xl: '../../assets/demo_images/1280x960.png',
        },
        alt: 'This is a test image',
        responsive: true,
      },
    },
  ],
};

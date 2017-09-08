module.exports = {
  title: 'Banners',
  label: 'Banners',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'background',
  variants: [
    {
      name: 'background',
      label: 'Background banner',
      context: {
        type: 'background',
        src: 'http://lorempixel.com/1600/370/abstract/8',
        title: {
          label: 'White Paper on the future of Europe',
          href: '#',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      },
    },
    {
      name: 'quote',
      label: 'Quote banner',
      context: {
        type: 'quote',
        quote: {
          body: `
            Nullam eget gravida sapien. Curabitur nec ligula varius tellus blandit auctor in non felis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Pellentesque in volutpat eros, ut fringilla tortor.
          `,
          author: 'President Juncker',
        },
      },
    },
    {
      name: 'video',
      label: 'Video banner',
      context: {
        type: 'video',
        video: {
          src: 'http://ec.europa.eu/avservices/play.cfm?ref=I101631',
          iframe: true,
          ratio: '16-9',
          caption:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
        description: `
          <p class="ecl-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="ecl-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p class="ecl-paragraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `,
      },
    },
  ],
};

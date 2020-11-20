const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id orci blandit, sodales tellus ut, ultricies sem. Donec ipsum risus, dignissim sit amet felis eu, viverra tempor enim. Praesent lobortis arcu ut orci commodo pellentesque. Phasellus dignissim sit amet risus at congue. Nunc vitae sapien eget augue volutpat congue. Ut quis lectus ultrices, mattis nisl non, porttitor lorem. Suspendisse potenti. Morbi ultrices, nibh at interdum tincidunt, lacus orci vestibulum velit, et rhoncus lacus tellus id velit. Etiam sed erat sit amet mauris iaculis volutpat sollicitudin ac odio. Phasellus dignissim non metus non consequat. Nam eu vestibulum nunc.';

module.exports = {
  title: 'Page contents',
  links: [
    {
      href: '#inline-nav-1',
      label: 'Heading 1',
      item: `<h2 class="ecl-u-type-heading-2" id="inline-nav-1">Heading 1</h2><p class="ecl-u-type-paragraph-m">${loremIpsum}</p><p class="ecl-u-type-paragraph-m">${loremIpsum}</p>`,
    },
    {
      href: '#inline-nav-2',
      label: 'Heading 2 with a long title going on several lines',
      item: `<h2 class="ecl-u-type-heading-2" id="inline-nav-2">Heading 2 with a long title going on several lines</h2><p class="ecl-u-type-paragraph-m">${loremIpsum}</p><p class="ecl-u-type-paragraph-m">${loremIpsum}</p>`,
    },
    {
      href: '#inline-nav-3',
      label: 'Heading 3',
      item: `<h2 class="ecl-u-type-heading-2" id="inline-nav-3">Heading 3</h2><p class="ecl-u-type-paragraph-m">${loremIpsum}</p><p class="ecl-u-type-paragraph-m">${loremIpsum}</p>`,
    },
    {
      href: '#inline-nav-4',
      label: 'Heading 4',
      item: `<h2 class="ecl-u-type-heading-2" id="inline-nav-4">Heading 4</h2><p class="ecl-u-type-paragraph-m">${loremIpsum}</p><p class="ecl-u-type-paragraph-m">${loremIpsum}</p>`,
    },
  ],
  icon_path: '/icons.svg',
};

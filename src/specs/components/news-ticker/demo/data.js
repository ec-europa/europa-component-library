// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'news-ticker-example',
  icon_path: '/icons.svg',
  counter_label: 'of',
  items: [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      link: exampleLink,
    },
    {
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      link: exampleLink,
    },
    {
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: exampleLink,
    },
    {
      content:
        'Excepteur sint occaecat cupidatat officia deserunt mollit anim id est laborum',
      link: exampleLink,
    },
    {
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      link: exampleLink,
    },
    {
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores',
    },
  ],
};

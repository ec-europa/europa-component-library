const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Share this page',
  links: [
    {
      link: {
        label: 'X',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'twitter',
        size: 'm',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'facebook',
        size: 'm',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Linkedin',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'linkedin',
        size: 'm',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Telegram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'telegram',
        size: 'm',
        family: 'networks',
      },
    },
  ],
  popover: {
    id: 'social-media-share-popover',
    toggle: {
      link: {
        label: 'Other social networks',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'share',
        size: 'm',
        family: 'networks',
      },
    },
    content: `Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
      Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.`,
  },
};

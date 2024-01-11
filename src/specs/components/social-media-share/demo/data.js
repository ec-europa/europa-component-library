const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Share this page',
  links: [
    {
      link: {
        label: 'Twitter',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'facebook-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Linkedin',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'linkedin-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Telegram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'telegram-color',
        size: 'm',
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
        path: '/icons.svg',
        name: 'share',
        size: 'm',
      },
    },
    content: `Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
      Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.`,
  },
};

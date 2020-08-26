import specDataWithTranslation from '@ecl/ec-specs-file/demo/data--with-translation';
import { formatLink, formatIcon } from '@ecl-twig/data-utils';

export default {
  title: specDataWithTranslation.title,
  language: specDataWithTranslation.language,
  meta: specDataWithTranslation.meta,
  icon: formatIcon(specDataWithTranslation.icon),
  download: {
    ...formatLink(specDataWithTranslation.download),
    icon: {
      path: '/icons.svg',
    },
  },
  translation: {
    toggle: {
      ...specDataWithTranslation.translation.toggle,
      icon: {
        path: '/icons.svg',
      },
    },
    description: specDataWithTranslation.translation.description,
    items: [
      {
        ...specDataWithTranslation.translation.items[0],
        download: {
          link: {
            label: 'Download',
            path: '/example#bg',
          },
          icon: {
            path: '/icons.svg',
          },
        },
      },
      {
        ...specDataWithTranslation.translation.items[1],
        download: {
          link: {
            label: 'Download',
            path: '/example#es',
          },
          icon: {
            path: '/icons.svg',
          },
        },
      },
      {
        ...specDataWithTranslation.translation.items[2],
        download: {
          link: {
            label: 'Download',
            path: '/example#fr',
          },
          icon: {
            path: '/icons.svg',
          },
        },
      },
    ],
  },
};

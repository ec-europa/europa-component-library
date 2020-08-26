import { formatLink } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  const adaptedData = {};

  if (initialData.backToTop) {
    adaptedData.back_to_top = {
      link: {
        label: initialData.backToTop.label,
        path: initialData.backToTop.href,
        icon_position: 'after',
      },
      icon: {
        path: '/static/icons.svg',
        size: initialData.backToTop.icon.size,
      },
    };
  }

  if (initialData.identity) {
    adaptedData.identity = {
      title: initialData.identity.title,
      follow: {
        label: initialData.identity.follow.label,
        links: initialData.identity.follow.links.map((item) =>
          formatLink(item)
        ),
      },
      info: initialData.identity.info.map((item) => formatLink(item)),
    };
  }

  if (initialData.sections) {
    adaptedData.sections = initialData.sections.map((s) => {
      return {
        title: s.title,
        links: s.links.map((item) => formatLink(item)),
      };
    });
  }

  if (initialData.common) {
    adaptedData.common = initialData.common.map((item) => formatLink(item));
  }

  return adaptedData;
};

export default adapter;

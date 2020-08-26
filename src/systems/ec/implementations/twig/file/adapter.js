import { formatLink } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.detailMeta) {
    adaptedData.detail_meta = adaptedData.detailMeta.split(' | ');
    delete adaptedData.detailMeta;
  }
  if (adaptedData.download) {
    adaptedData.download = {
      ...formatLink(initialData.download),
      icon: {
        path: '/icons.svg',
      },
    };
  }
  if (adaptedData.image) {
    adaptedData.variant = 'thumbnail';
  }
  if (adaptedData.translation) {
    adaptedData.translation.toggle = {
      ...initialData.translation.toggle,
      icon: {
        path: '/icons.svg',
      },
    };
    adaptedData.translation.items.forEach((item) => {
      item.lang_full = item.langFull;
      delete item.langFull;
      item.download = formatLink(item.download);
      item.download.icon = { path: '/icons.svg' };
    });
  }

  return adaptedData;
};

export default adapter;

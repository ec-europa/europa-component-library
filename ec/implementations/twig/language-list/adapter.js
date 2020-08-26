import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.items = adaptedData.items.map((item) => formatLinkAlt(item));
  adaptedData.non_eu_items = adaptedData.itemsNonEu.map((item) =>
    formatLinkAlt(item)
  );
  adaptedData.eu_category = adaptedData.categoryEu;
  adaptedData.non_eu_category = adaptedData.categoryNonEu;
  delete adaptedData.categoryEu;
  delete adaptedData.categoryNonEu;
  delete adaptedData.itemsNonEu;

  adaptedData.icon_path = '/icons.svg';
  if (initialData.logoAlt) {
    adaptedData.logo = {
      alt: initialData.logoAlt,
      path: '/logo--mute.svg',
    };
    delete adaptedData.logoAlt;
  }
  if (initialData.closeLabel) {
    adaptedData.close_label = initialData.closeLabel;
    delete adaptedData.closeLabel;
  }

  return adaptedData;
};

export default adapter;

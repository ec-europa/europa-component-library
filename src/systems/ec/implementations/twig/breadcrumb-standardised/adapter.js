import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links = adaptedData.items.map((item) => formatLinkAlt(item));
  adaptedData.navigation_text = adaptedData.label;
  adaptedData.icon_file_path = '/icons.svg';
  delete adaptedData.label;
  delete adaptedData.items;
  adaptedData.ellipsis_label = 'Click to expand';
  return adaptedData;
};

export default adapter;

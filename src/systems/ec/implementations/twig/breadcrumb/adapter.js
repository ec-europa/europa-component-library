import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links = adaptedData.items.map((item) => formatLinkAlt(item));
  delete adaptedData.items;
  adaptedData.icon_file_path = '/icons.svg';
  adaptedData.ellipsis_label = 'Click to expand';
  delete adaptedData.ariaLabel;

  adaptedData.navigation_text = adaptedData.label;

  return adaptedData;
};

export default adapter;

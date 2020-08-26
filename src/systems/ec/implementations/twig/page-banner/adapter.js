import { formatLink } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.link) {
    adaptedData.link = formatLink(adaptedData.link);

    if (adaptedData.link.icon) {
      adaptedData.link.link.icon_position = 'after';
      delete adaptedData.icon_position;
    }
  }

  adaptedData.type = adaptedData.variant;
  delete adaptedData.variant;

  adaptedData.centered = initialData.isCentered;
  delete adaptedData.isCentered;

  return adaptedData;
};

export default adapter;

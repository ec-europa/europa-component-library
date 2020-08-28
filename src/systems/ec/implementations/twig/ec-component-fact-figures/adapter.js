import { formatLink, formatIcon } from '@ecl/data-utils-twig';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.view_all = formatLink(adaptedData.viewAll);
  delete adaptedData.viewAll;

  adaptedData.items.forEach((item) => {
    item.icon = formatIcon(item.icon);
  });
  adaptedData.display_icons = true;
  return adaptedData;
};

export default adapter;

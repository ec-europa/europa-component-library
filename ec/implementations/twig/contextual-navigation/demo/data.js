/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-contextual-navigation/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.items_limit = 3;

  // Correct link path attributes.
  adaptedData.items.forEach((item) => {
    item.path = item.href;
    item.type = item.variant;
  });

  // Correct read more button.
  adaptedData.item_more = adaptedData.itemMore;

  // Correct icon.
  const [type, name] = adaptedData.item_more.icon.shape.split('--');

  adaptedData.item_more.icon = {
    name,
    type,
    path: '/icons.svg',
    ...adaptedData.item_more.icon,
  };

  return adaptedData;
};

export default adapter(specData);

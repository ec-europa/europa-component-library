/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-accordion/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.items.forEach((item) => {
    const { toggle } = item;
    const [type, name] = toggle.iconShape.split('--');

    toggle.icon = {
      name,
      type,
      path: '/icons.svg',
      size: 's',
    };
  });

  return adaptedData;
};

export default adapter(specData);

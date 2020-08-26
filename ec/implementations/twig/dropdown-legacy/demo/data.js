/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-dropdown-legacy/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const [type, name] = adaptedData.button.icon.shape.split('--');
  delete adaptedData.button.icon.shape;

  adaptedData.button.icon = {
    type,
    name,
    path: '/icons.svg',
    ...adaptedData.button.icon,
  };

  return adaptedData;
};

export default adapter(specData);

import { formatIcon, formatButton } from '@ecl/data-utils-twig';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.icon = formatIcon(adaptedData.icon);
  adaptedData.close = formatButton(adaptedData.close);

  return adaptedData;
};

export default adapter;

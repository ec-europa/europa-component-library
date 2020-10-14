const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.link = {
    type: adaptedData.variant,
    label: adaptedData.label,
    path: adaptedData.href,
    aria_label: adaptedData.ariaLabel,
  };

  delete adaptedData.variant;
  delete adaptedData.label;
  delete adaptedData.href;
  delete adaptedData.ariaLabel;

  if (adaptedData.icon) {
    adaptedData.link.icon_position = 'after';
    adaptedData.icon.path = '/icons.svg';
    adaptedData.icon.name = adaptedData.icon.shape;
    delete adaptedData.icon.shape;
  }
  return adaptedData;
};

export default adapter;

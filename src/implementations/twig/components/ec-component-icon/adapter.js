const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const [type, name] = adaptedData.shape.split('--');
  adaptedData.icon = {};
  adaptedData.icon.size = 'm';
  adaptedData.icon.path = '/icons.svg';
  adaptedData.icon.type = type;
  adaptedData.icon.name = name;
  delete adaptedData.shape;

  return adaptedData;
};

export default adapter;

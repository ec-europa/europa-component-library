const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.meta) {
    adaptedData.meta = adaptedData.meta.replace(/(<([^>]+)>)/gi, '');
  }

  return adaptedData;
};

export default adapter;

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.helper_text = adaptedData.helperText;
  adaptedData.invalid_text = adaptedData.invalidText;
  adaptedData.optional_text = adaptedData.optionalText;
  adaptedData.required_text = adaptedData.requiredText;
  adaptedData.icons_path = '/icons.svg';
  adaptedData.placeholder = 'DD-MM-YYYY';
  adaptedData.required = true;
  adaptedData.label = 'Label';
  delete adaptedData.helperText;
  delete adaptedData.invalidText;
  delete adaptedData.optionalText;
  delete adaptedData.requiredText;

  return adaptedData;
};

export default adapter;

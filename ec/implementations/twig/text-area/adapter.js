const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  if (adaptedData.has_error) {
    adaptedData.invalid = true;
    delete adaptedData.has_error;
  }

  if (adaptedData.is_disabled) {
    adaptedData.disabled = true;
    delete adaptedData.is_disabled;
  }

  adaptedData.invalid_text = 'This is the error message';
  adaptedData.helper_text = "This is the input's helper text.";
  adaptedData.optional_text = '(optional)';
  adaptedData.label = 'Label';
  adaptedData.required = true;
  adaptedData.required_text = '*';
  adaptedData.optional_text = '(optional)';
  adaptedData.id = 'example';

  return adaptedData;
};

export default adapter;

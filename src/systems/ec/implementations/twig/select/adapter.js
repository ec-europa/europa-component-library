const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.required_text = adaptedData.requiredText;
  delete adaptedData.requiredText;
  adaptedData.optional_text = adaptedData.optionalText;
  delete adaptedData.optionalText;
  adaptedData.helper_text = adaptedData.helperText;
  delete adaptedData.helperText;
  adaptedData.invalid_text = adaptedData.invalidText;
  delete adaptedData.invalidText;
  adaptedData.icon_path = '/icons.svg';
  adaptedData.required = true;
  if (adaptedData.multiple) {
    adaptedData.multiple_all_text = adaptedData.multipleAllText;
    adaptedData.multiple_search_text = adaptedData.multipleSearchText;
    adaptedData.multiple_placeholder = adaptedData.multiplePlaceholder;
    delete adaptedData.multiplePlaceholder;
    delete adaptedData.multipleSearchText;
    delete adaptedData.multipleAllText;
  }

  return adaptedData;
};

export default adapter;

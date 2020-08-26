const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.required_text = adaptedData.requiredText;
  delete adaptedData.requiredText;
  adaptedData.helper_text = adaptedData.helperText;
  delete adaptedData.helperText;
  adaptedData.optional_text = adaptedData.optionalText;
  delete adaptedData.optionalText;
  adaptedData.invalid_text = adaptedData.invalidText;
  delete adaptedData.invalidText;
  adaptedData.button_choose_label = adaptedData.buttonChooseLabel;
  delete adaptedData.buttonChooseLabel;
  adaptedData.button_replace_label = adaptedData.buttonReplaceLabel;
  delete adaptedData.buttonReplaceLabel;
  adaptedData.required = true;

  return adaptedData;
};

export default adapter;

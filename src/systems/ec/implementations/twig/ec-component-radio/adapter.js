function formatItem(i) {
  const item = {
    ...i,
    helper_id: i.helperId,
    helper_text: i.helperText,
  };
  if (i.defaultChecked) {
    item.default_checked = i.defaultChecked;
    delete item.defaultChecked;
  }

  delete item.helperId;
  delete item.helperText;

  return item;
}

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.helper_id = adaptedData.helperId;
  adaptedData.helper_text = adaptedData.helperText;
  adaptedData.invalid_text = adaptedData.invalidText;
  adaptedData.helper_id = 'helper-id-1';
  adaptedData.label = adaptedData.legend;
  adaptedData.optional_text = '(optional)';
  adaptedData.required_text = '*';
  adaptedData.name = 'radio-group-1';
  adaptedData.required = true;

  delete adaptedData.helperId;
  delete adaptedData.helperText;
  delete adaptedData.invalidText;

  adaptedData.items = adaptedData.items.map((item) => formatItem(item));

  return adaptedData;
};

export default adapter;

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.label_expanded = adaptedData.labelExpanded;
  adaptedData.label_collapsed = adaptedData.labelCollapsed;
  delete adaptedData.labelExpanded;
  delete adaptedData.labelCollapsed;
  adaptedData.content = `<p class="ecl-u-type-paragraph-m">${adaptedData.content}</p>`;
  adaptedData.button.icon = {
    path: '/icons.svg',
  };
  // Delete everything that is unneeded for our component to
  // be properly rendered when we have the values in the template.
  delete adaptedData.button.icon.shape;
  delete adaptedData.button.variant;
  delete adaptedData.button.label;

  return adaptedData;
};

export default adapter;

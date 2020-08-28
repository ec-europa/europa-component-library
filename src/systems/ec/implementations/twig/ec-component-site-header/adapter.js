const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const defaultSprite = '/icons.svg';
  const englishBanner = '/logo--en.svg';
  const frenchBanner = '/logo--fr.svg';

  const lng = adaptedData.logo.language;
  adaptedData.logo.src_desktop = lng === 'en' ? englishBanner : frenchBanner;

  adaptedData.language_selector = adaptedData.languageSelector;
  delete adaptedData.languageSelector;

  adaptedData.language_selector.overlay.close_label =
    adaptedData.language_selector.overlay.closeLabel;
  delete adaptedData.language_selector.overlay.closeLabel;

  adaptedData.language_selector.overlay.items.forEach((item) => {
    item.path = item.href;
    delete item.href;
    if (item.isActive) {
      item.active = true;
      delete item.isActive;
    }
  });

  adaptedData.search_form = {
    text_input: {
      id: adaptedData.searchForm.textInputId,
      label: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
  };
  delete adaptedData.searchForm;

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export default adapter;

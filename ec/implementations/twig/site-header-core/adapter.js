import he from 'he';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const defaultSprite = '/icons.svg';
  if (adaptedData.loginToggle) {
    adaptedData.login_toggle = {
      label_not_logged: adaptedData.loginToggle.labelNotLogged,
      href_not_logged: adaptedData.loginToggle.hrefNotLogged,
      label_logged: adaptedData.loginToggle.labelLogged,
      href_logged: adaptedData.loginToggle.hrefLogged,
    };
    delete adaptedData.loginToggle;
  }
  // Login box.
  adaptedData.login_box = adaptedData.loginBox;
  delete adaptedData.loginBox;
  if (adaptedData.login_box) {
    adaptedData.login_box.description = he.escape(
      adaptedData.login_box.description
    );
  }

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
    extra_attributes: [{ name: 'id', value: adaptedData.searchForm.id }],
  };
  delete adaptedData.searchForm;

  adaptedData.search_toggle = adaptedData.searchToggle;
  delete adaptedData.searchToggle;

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export default adapter;

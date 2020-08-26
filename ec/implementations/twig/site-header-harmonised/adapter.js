import { formatLink } from '@ecl-twig/data-utils';
import he from 'he';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const defaultSprite = '/icons.svg';
  adaptedData.banner_top = adaptedData.bannerTop;
  if (adaptedData.banner_top instanceof Object) {
    adaptedData.banner_top = formatLink(adaptedData.banner_top);
  }
  delete adaptedData.bannerTop;
  // Login toggle.
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
      item.active = true; // eslint-disable-line no-param-reassign
      delete item.isActive;
    }
  });
  // Search toggle.
  adaptedData.search_toggle = adaptedData.searchToggle;
  delete adaptedData.searchToggle;
  // Search form.
  adaptedData.search_form = {
    extra_attributes: [{ name: 'id', value: adaptedData.searchForm.id }],
    text_input: {
      id: adaptedData.searchForm.textInputId,
      name: adaptedData.searchForm.inputLabel,
      label: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
  };
  delete adaptedData.searchForm;

  adaptedData.icon_file_path = defaultSprite;
  adaptedData.menu_label = 'Menu';
  adaptedData.site_name = 'Site name';

  return adaptedData;
};

export default adapter;

import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/specs-component-site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/specs-component-site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/specs-component-site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/specs-component-mega-menu/demo/data';
import dataBreadcrumb from '@ecl/specs-component-breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/specs-component-page-header/demo/data';
import dataContentItem from '@ecl/specs-component-content-item/demo/data--image';
import dataPagination from '@ecl/specs-component-pagination/demo/data';
import dataSelectMultiple from '@ecl/specs-component-select/demo/data-multiple';
import dataTextInput from '@ecl/specs-component-text-input/demo/data';
import dataCheckbox from '@ecl/specs-component-checkbox/demo/data';
import dataButtonPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataButtonSecondary from '@ecl/specs-component-button/demo/data--secondary';

dataSiteHeaderEC.mega_menu = dataMegaMenu;
delete dataSiteHeaderEC.cta_link;
delete dataSiteHeaderEC.banner_top;
delete dataSiteHeaderEC.notification;
delete dataSiteHeaderEC.site_name;

dataSiteHeaderEU.mega_menu = dataMegaMenu;
delete dataSiteHeaderEU.cta_link;
delete dataSiteHeaderEU.banner_top;
delete dataSiteHeaderEU.notification;
delete dataSiteHeaderEU.site_name;

dataPageHeader.breadcrumb = dataBreadcrumb;
dataPageHeader.hide_title = true;
delete dataPageHeader.picture_background;
delete dataPageHeader.picture_thumbnail;
delete dataPageHeader.meta;
delete dataPageHeader.description;

dataContentItem.picture.size = 'small';
delete dataContentItem.labels;
delete dataContentItem.lists;
delete dataContentItem.secondary_meta;

dataCheckbox.required = false;
delete dataCheckbox.optional_text;
delete dataCheckbox.helper_text;

dataSelectMultiple.required = false;
delete dataSelectMultiple.optional_text;
delete dataSelectMultiple.helper_text;

dataTextInput.required = false;
delete dataTextInput.optional_text;
delete dataTextInput.helper_text;

const system = getSystem();

const data = {
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: dataPageHeader,
  content_item: dataContentItem,
  pagination: dataPagination,
  select_multiple: dataSelectMultiple,
  text_input: dataTextInput,
  checkbox: dataCheckbox,
  button_primary: dataButtonPrimary,
  button_secondary: dataButtonSecondary,
};

export default data;

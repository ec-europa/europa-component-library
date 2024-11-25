import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/specs-component-site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/specs-component-site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/specs-component-site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/specs-component-mega-menu/demo/data';
import dataBreadcrumb from '@ecl/specs-component-breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/specs-component-page-header/demo/data';
import dataInpageNavigation from '@ecl/specs-component-inpage-navigation/demo/data';
import dataAccordion from '@ecl/specs-component-accordion/demo/data';
import dataUnorderedList from '@ecl/specs-component-unordered-list/demo/data--text';
import dataFile from '@ecl/specs-component-file/demo/data--with-translation';
import dataGallery from '@ecl/specs-component-gallery/demo/data';

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
delete dataPageHeader.picture_background;

dataInpageNavigation.links[0].label = 'Donec nec ex condimentum';
dataInpageNavigation.links[1].label = 'Curabitur faucibus ex eu';
dataInpageNavigation.links[2].label =
  'Maecenas ultrices mi rutrum urna volutpat';
dataInpageNavigation.links[3].label = 'Nullam';

dataFile.id = 'file-id';

const system = getSystem();

const data = {
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: dataPageHeader,
  inpage_navigation: dataInpageNavigation,
  accordion: dataAccordion,
  unordered_list: dataUnorderedList,
  file: dataFile,
  gallery: dataGallery,
};

export default data;

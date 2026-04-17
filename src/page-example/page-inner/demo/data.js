import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import dataBreadcrumb from '@ecl/breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/page-header/demo/data';
import dataInpageNavigation from '@ecl/inpage-navigation/demo/data';
import dataAccordion from '@ecl/accordion/demo/data';
import dataUnorderedList from '@ecl/unordered-list/demo/data--text';
import dataFile from '@ecl/file/demo/data--with-translation';
import dataGallery from '@ecl/gallery/demo/data';
import dataTabs from '@ecl/tabs/demo/data--with-content';
import dataModal from '@ecl/modal/demo/data';
import dataAnimationNumber from '@ecl/animated-numbers/demo/data';

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

const pageHeader = JSON.parse(JSON.stringify(dataPageHeader));
pageHeader.breadcrumb = dataBreadcrumb;
pageHeader.picture_position = 'top';
delete pageHeader.picture_thumbnail;

dataInpageNavigation.links[0].label = 'Donec nec ex condimentum';
dataInpageNavigation.links[1].label = 'Curabitur faucibus ex eu';
dataInpageNavigation.links[2].label =
  'Maecenas ultrices mi rutrum urna volutpat';
dataInpageNavigation.links[3].label = 'Nullam';

dataFile.id = 'file-id';

const system = getSystem();

const data = {
  system,
  icon_path: '/icons.svg',
  animated_numbers: dataAnimationNumber.slice(0, 3),
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: pageHeader,
  tabs: dataTabs,
  inpage_navigation: dataInpageNavigation,
  accordion: dataAccordion,
  unordered_list: dataUnorderedList,
  file: dataFile,
  gallery: dataGallery,
  modal: dataModal,
};

export default data;

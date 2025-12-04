import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import dataBreadcrumb from '@ecl/breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/page-header/demo/data';
import dataFeaturedItem from '@ecl/featured-item/demo/data';

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
delete pageHeader.picture_thumbnail;

dataFeaturedItem.type = 'highlight';
dataFeaturedItem.description =
  '<div class="ecl"><p>Curabitur neque erat, interdum sed euismod sed, sollicitudin sed magna. Etiam consequat lobortis mi, eget malesuada nibh rutrum non. Praesent fermentum leo quis consectetur egestas.</p><ul><li>Nulla malesuada dignissim lacus vel aliquam</li><li>Duis porta blandit</li></ul></div>';

const system = getSystem();

const data = {
  system,
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: pageHeader,
  featured_item: dataFeaturedItem,
};

export default data;

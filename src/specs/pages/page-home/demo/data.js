import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import dataBannerVideo from '@ecl/banner/demo/data--video';
import dataCard from '@ecl/card/demo/data';
import dataContentItem from '@ecl/content-item/demo/data--event';
import dataFeaturedItem from '@ecl/featured-item/demo/data--highlight';
import dataNavigationList from '@ecl/navigation-list/demo/data-illustration';

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

dataBannerVideo.description = dataBannerVideo.description.link.label;
dataBannerVideo.full_width = true;
delete dataBannerVideo.link;

delete dataCard.description;
delete dataCard.primary_meta;
delete dataCard.labels;
delete dataCard.labels_aria;
delete dataCard.secondary_meta;
delete dataCard.lists;

delete dataContentItem.labels;
delete dataContentItem.labels_aria;
delete dataContentItem.lists;

delete dataFeaturedItem.footer_description;
delete dataFeaturedItem.footer_link;
delete dataFeaturedItem.footer_picture;

dataNavigationList.column = 3;
dataNavigationList.items.push(...dataNavigationList.items);

const system = getSystem();

const data = {
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  banner: dataBannerVideo,
  card: dataCard,
  content_item: dataContentItem,
  featured_item: dataFeaturedItem,
  navigation_list: dataNavigationList,
};

export default data;

import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import dataPageHeader from '@ecl/page-header/demo/data';
import dataAddToCalendar from '@ecl/add-to-calendar/demo/data';
import dataBanner from '@ecl/banner/demo/data--image';
import dataCard from '@ecl/card/demo/data';
import dataContentItem from '@ecl/content-item/demo/data--event';
import dataFeaturedItem from '@ecl/featured-item/demo/data';
import dataNavigationList from '@ecl/navigation-list/demo/data-illustration';

dataSiteHeaderEC.mega_menu = dataMegaMenu;
delete dataSiteHeaderEC.cta_link;
delete dataSiteHeaderEC.banner_top;
delete dataSiteHeaderEC.notification;
delete dataSiteHeaderEC.site_name;

const banner = JSON.parse(JSON.stringify(dataBanner));
banner.full_width = true;
banner.box_background = 'dark';
banner.title = 'Making business easier with EU Inc.';
banner.description = 'One Europe, one market';
banner.link = {
  link: {
    label: 'Learn more',
    path: '#',
    icon_position: 'after',
  },
  icon: {
    name: 'corner-arrow',
    size: 'xs',
    transform: 'rotate-90',
  },
};
banner.picture.img.src =
  'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg';
delete banner.credit;

const addToCalendar = JSON.parse(JSON.stringify(dataAddToCalendar));
addToCalendar.full_width = true;
addToCalendar.button_add =
  "<div class='ecl-u-bg-white ecl-u-type-m ecl-u-type-color-black ecl-u-border-all ecl-u-border-color-error ecl-u-border-width-4 ecl-u-border-style-dashed ecl-u-pv-xs ecl-u-ph-s ecl-u-width-100'>Button placeholder</div>";

const addToCalendar2 = JSON.parse(JSON.stringify(dataAddToCalendar));
addToCalendar2.button_add =
  "<div class='ecl-u-bg-white ecl-u-type-m ecl-u-type-color-black ecl-u-border-all ecl-u-border-color-error ecl-u-border-width-4 ecl-u-border-style-dashed ecl-u-pv-xs ecl-u-ph-s ecl-u-width-100'>Button placeholder</div>";

dataSiteHeaderEU.mega_menu = dataMegaMenu;
delete dataSiteHeaderEU.cta_link;
delete dataSiteHeaderEU.banner_top;
delete dataSiteHeaderEU.notification;
delete dataSiteHeaderEU.site_name;

const pageHeader = JSON.parse(JSON.stringify(dataPageHeader));
pageHeader.hide_title = true;
delete pageHeader.breadcrumb;
delete pageHeader.description;
delete pageHeader.meta;
delete pageHeader.picture_background;
delete pageHeader.picture_thumbnail;
delete pageHeader.expandable;

delete dataCard.description;
delete dataCard.primary_meta;
delete dataCard.labels;
delete dataCard.labels_aria;
delete dataCard.secondary_meta;
delete dataCard.lists;

delete dataContentItem.labels;
delete dataContentItem.labels_aria;
delete dataContentItem.lists;

dataFeaturedItem.type = 'highlight';
delete dataFeaturedItem.footer_description;
delete dataFeaturedItem.footer_link;
delete dataFeaturedItem.footer_picture;

const navigationList = JSON.parse(JSON.stringify(dataNavigationList));
navigationList.column = 3;
navigationList.items.push(...navigationList.items);

const system = getSystem();

const data = {
  system,
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? dataSiteHeaderEU : dataSiteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: pageHeader,
  banner: banner,
  add_to_calendar: addToCalendar,
  add_to_calendar2: addToCalendar2,
  card: dataCard,
  content_item: dataContentItem,
  featured_item: dataFeaturedItem,
  navigation_list: navigationList,
};

export default data;

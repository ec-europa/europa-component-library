import getSystem from '@ecl/builder/utils/getSystem';

import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataSiteHeaderEU from '@ecl/site-header/demo/data--eu';
import dataSiteFooterEU from '@ecl/site-footer/demo/data-harmonised--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import dataBreadcrumb from '@ecl/breadcrumb/demo/data--long';
import dataPageHeader from '@ecl/page-header/demo/data';
import dataBanner from '@ecl/banner/demo/data--image';
import dataListIllustrationIcon from '@ecl/list-illustration/demo/data--icon';
import dataListIllustrationImage from '@ecl/list-illustration/demo/data--image';
import dataBlockquote from '@ecl/blockquote/demo/data';
import dataFeaturedItem from '@ecl/featured-item/demo/data';
import dataTable from '@ecl/table/demo/data--multi';
import dataUnorderedList from '@ecl/unordered-list/demo/data--text';
import dataFactFigures from '@ecl/fact-figures/demo/data';
import dataTimeline from '@ecl/timeline/demo/data';

const siteHeaderEC = JSON.parse(JSON.stringify(dataSiteHeaderEC));
siteHeaderEC.mega_menu = dataMegaMenu;
delete siteHeaderEC.cta_link;
delete siteHeaderEC.banner_top;
delete siteHeaderEC.notification;
delete siteHeaderEC.site_name;

const siteHeaderEU = JSON.parse(JSON.stringify(dataSiteHeaderEU));
siteHeaderEU.mega_menu = dataMegaMenu;
delete siteHeaderEU.cta_link;
delete siteHeaderEU.banner_top;
delete siteHeaderEU.notification;
delete siteHeaderEU.site_name;

const pageHeader = JSON.parse(JSON.stringify(dataPageHeader));
pageHeader.breadcrumb = dataBreadcrumb;
pageHeader.hide_title = true;
delete pageHeader.description;
delete pageHeader.meta;
delete pageHeader.picture_background;
delete pageHeader.picture_thumbnail;

const banner = JSON.parse(JSON.stringify(dataBanner));
banner.full_width = true;
banner.horizontal = 'center';
banner.size = 'l';
banner.description = banner.description.link.label;
delete banner.link;

const illustrationListIcon = JSON.parse(
  JSON.stringify(dataListIllustrationIcon),
);
illustrationListIcon.centered = true;
illustrationListIcon.column = 4;
illustrationListIcon.zebra = false;
illustrationListIcon.font_size = 'm';
for (let i = 0; i < illustrationListIcon.items.length; i += 1) {
  delete illustrationListIcon.items[i].value;
  delete illustrationListIcon.items[i].description;
}

const illustrationListImageSmall = JSON.parse(
  JSON.stringify(dataListIllustrationImage),
);
illustrationListImageSmall.centered = true;
illustrationListImageSmall.column = 2;
illustrationListImageSmall.zebra = false;
illustrationListImageSmall.font_size = 'm';
for (let i = 0; i < illustrationListImageSmall.items.length; i += 1) {
  illustrationListImageSmall.items[i].square = true;
  delete illustrationListImageSmall.items[i].title;
}

const illustrationListImageLarge = JSON.parse(
  JSON.stringify(dataListIllustrationImage),
);
illustrationListImageLarge.column = 3;
illustrationListImageLarge.zebra = false;
illustrationListImageLarge.font_size = 'm';
illustrationListImageLarge.items.pop();
for (let i = 0; i < illustrationListImageLarge.items.length; i += 1) {
  delete illustrationListImageLarge.items[i].value;
}

const featuredItemLeft = JSON.parse(JSON.stringify(dataFeaturedItem));
delete featuredItemLeft.link;
delete featuredItemLeft.footer_description;
delete featuredItemLeft.footer_link;
delete featuredItemLeft.footer_picture;

const featuredItemRight = JSON.parse(JSON.stringify(dataFeaturedItem));
featuredItemRight.position = 'right';
delete featuredItemRight.link;
delete featuredItemRight.footer_description;
delete featuredItemRight.footer_link;
delete featuredItemRight.footer_picture;

const featuredItemHighlight = JSON.parse(JSON.stringify(dataFeaturedItem));
featuredItemHighlight.type = 'highlight';
delete featuredItemHighlight.footer_description;
delete featuredItemHighlight.footer_link;
delete featuredItemHighlight.footer_picture;

const timeline = JSON.parse(JSON.stringify(dataTimeline));
timeline.items.splice(-5, 5);

const factFigures = JSON.parse(JSON.stringify(dataFactFigures));
factFigures.centered = true;
factFigures.items.splice(-2, 2);

const system = getSystem();

const data = {
  icon_path: '/icons.svg',
  site_header: system === 'eu' ? siteHeaderEU : siteHeaderEC,
  site_footer: system === 'eu' ? dataSiteFooterEU : dataSiteFooterEC,
  page_header: pageHeader,
  banner,
  list_illustration_icon: illustrationListIcon,
  list_illustration_image_small: illustrationListImageSmall,
  list_illustration_image_large: illustrationListImageLarge,
  blockquote: dataBlockquote,
  featured_item_left: featuredItemLeft,
  featured_item_right: featuredItemRight,
  featured_item_highlight: featuredItemHighlight,
  table: dataTable,
  unordered_list: dataUnorderedList,
  fact_figures: factFigures,
  timeline,
};

export default data;

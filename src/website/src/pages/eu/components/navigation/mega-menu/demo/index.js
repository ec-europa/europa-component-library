import dataFull from '@ecl/site-header/demo/data--eu';
import dataMegaMenu from '@ecl/mega-menu/demo/data';
import template from '@ecl/site-header/site-header.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataWithMenu = { ...dataFull, mega_menu: dataMegaMenu };

const dataCore = JSON.parse(JSON.stringify(dataWithMenu));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.banner_top;
delete dataCore.cta_link;

const siteHeaderCore = template(correctSvgPath(dataCore));
export default siteHeaderCore;

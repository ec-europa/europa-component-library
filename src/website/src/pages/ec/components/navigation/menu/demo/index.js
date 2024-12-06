import dataFull from '@ecl/specs-component-site-header/demo/data--ec';
import dataMenu from '@ecl/specs-component-menu/demo/data--ec';
import template from '@ecl/twig-component-site-header/site-header.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataWithMenu = { ...dataFull, menu: dataMenu };

const dataCore = JSON.parse(JSON.stringify(dataWithMenu));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.banner_top;
delete dataCore.cta_link;

const siteHeaderCore = template(correctSvgPath(dataCore));
export default siteHeaderCore;

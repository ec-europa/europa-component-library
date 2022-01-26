import dataFull from '@ecl/specs-component-site-header/demo/data--eu';
import template from '@ecl/twig-component-site-header/site-header.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.banner_top;
delete dataCore.cta_link;
dataCore.has_menu = false;

// Harmonised
const dataHarmonised = JSON.parse(JSON.stringify(dataFull));
delete dataHarmonised.banner_top;
dataHarmonised.has_menu = true;

export const siteHeaderCore = template(correctSvgPath(dataCore));
export const siteHeaderHarmonised = template(correctSvgPath(dataHarmonised));

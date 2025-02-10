import dataCore from '@ecl/site-footer/demo/data-core--eu';
import dataHarmonised from '@ecl/site-footer/demo/data-harmonised--eu';
import template from '@ecl/site-footer/site-footer.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const siteFooterCore = template(correctSvgPath(dataCore));
export const siteFooterHarmonised = template(correctSvgPath(dataHarmonised));

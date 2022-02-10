import dataCore from '@ecl/specs-component-site-footer/demo/data-core--eu';
import template from '@ecl/twig-component-site-footer/site-footer.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const siteFooterCore = template(correctSvgPath(dataCore));

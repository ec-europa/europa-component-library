import dataCore from '@ecl/specs-component-site-footer/demo/data-core--ec';
import dataStandardised from '@ecl/specs-component-site-footer/demo/data-standardised--ec';
import dataHarmonised from '@ecl/specs-component-site-footer/demo/data-harmonised-group1--ec';
import template from '@ecl/twig-component-site-footer/site-footer.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const siteFooterCore = template(correctSvgPath(dataCore));
export const siteFooterStandardised = template(
  correctSvgPath(dataStandardised)
);
export const siteFooterHarmonised = template(correctSvgPath(dataHarmonised));

import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';
import template from '@ecl/twig-component-breadcrumb-harmonised/breadcrumb-harmonised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleHarmonised = template(correctSvgPath(dataSimple));
export const breadcrumbLongHarmonised = template(correctSvgPath(dataLong));

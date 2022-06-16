import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';
import template from '@ecl/twig-component-breadcrumb-core/breadcrumb-core.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleCore = template(correctSvgPath(dataSimple));
export const breadcrumbLongCore = template(correctSvgPath(dataLong));

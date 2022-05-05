import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--eu';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--eu';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleDefault = template(correctSvgPath(dataSimple));
export const breadcrumbLongDefault = template(correctSvgPath(dataLong));

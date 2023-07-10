import dataSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--long';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleCore = template(correctSvgPath(dataSimple));
export const breadcrumbLongCore = template(correctSvgPath(dataLong));

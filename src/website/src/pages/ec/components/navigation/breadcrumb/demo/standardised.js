import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleStandardised = template(
  correctSvgPath(dataSimple)
);
export const breadcrumbLongStandardised = template(correctSvgPath(dataLong));

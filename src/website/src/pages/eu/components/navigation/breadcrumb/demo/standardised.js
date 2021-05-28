import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--eu';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--eu';
import template from '@ecl/twig-component-breadcrumb-standardised/breadcrumb-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleStandardised = template(
  correctSvgPath(dataSimple)
);
export const breadcrumbLongStandardised = template(correctSvgPath(dataLong));

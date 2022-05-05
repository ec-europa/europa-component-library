import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbSimpleDefault = template(correctSvgPath(dataSimple));
export const breadcrumbLongDefault = template(correctSvgPath(dataLong));

export const breadcrumbSimpleCore = template(
  correctSvgPath({ ...dataSimple, variant: 'negative' })
);
export const breadcrumbLongCore = template(
  correctSvgPath({ ...dataLong, variant: 'negative' })
);

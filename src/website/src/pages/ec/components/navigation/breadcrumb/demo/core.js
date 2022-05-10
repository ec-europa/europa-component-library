import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataCoreSimple = { ...dataSimple, variant: 'negative' };
const dataCoreLong = { ...dataLong, variant: 'negative' };

export const breadcrumbSimpleCore = template(correctSvgPath(dataCoreSimple));
export const breadcrumbLongCore = template(correctSvgPath(dataCoreLong));

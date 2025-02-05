import dataLong from '@ecl/breadcrumb/demo/data--long';
import template from '@ecl/breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbLong = template(correctSvgPath(dataLong));

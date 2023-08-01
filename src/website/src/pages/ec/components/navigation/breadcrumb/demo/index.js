import dataLong from '@ecl/specs-component-breadcrumb/demo/data--long';
import template from '@ecl/twig-component-breadcrumb/breadcrumb.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const breadcrumbLong = template(correctSvgPath(dataLong));

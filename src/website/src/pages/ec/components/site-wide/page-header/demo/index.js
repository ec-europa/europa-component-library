import { correctSvgPath } from '@ecl/website-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import template from '@ecl/twig-component-page-header/page-header.html.twig';

// Default
const dataDefault = { ...demoDefault };
const dataBreadcrumb = { ...demoBreadcrumbLong };
dataDefault.breadcrumb = dataBreadcrumb;

// Core
const dataCore = { ...demoDefault, variant: 'negative' };
const dataBreadcrumbCore = { ...demoBreadcrumbLong };
dataBreadcrumbCore.links.forEach((item) => {
  item.negative = true;
});
dataCore.breadcrumb = dataBreadcrumbCore;

export const pageHeaderCoreDefault = template(correctSvgPath(dataCore));

// Standardised & Harmonised
export const pageHeaderDefault = template(correctSvgPath(dataDefault));

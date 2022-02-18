import { correctSvgPath } from '@ecl/website-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import template from '@ecl/twig-component-page-header/page-header.html.twig';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;

// Core
const prepareCoreData = (data) => {
  data.variant = 'negative';
  data.breadcrumb.links.forEach((item) => {
    item.negative = true;
  });
  return data;
};

export const pageHeaderCoreDefault = template(
  correctSvgPath(prepareCoreData(dataDefault))
);

// Standardised & Harmonised
export const pageHeaderDefault = template(correctSvgPath(dataDefault));

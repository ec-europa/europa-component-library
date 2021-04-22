import demoDefault from '@ecl/specs-component-page-header-standardised/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header-standardised/demo/data--background-image';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import template from '@ecl/twig-component-page-header-standardised/page-header-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;
delete dataDefault.thumbnail;
export const pageHeaderDefault = template(correctSvgPath(dataDefault));

// Thumbnail
const dataThumbnail = { ...demoDefault };
dataThumbnail.breadcrumb = dataBreadcrumb;
export const pageHeaderThumbnail = template(correctSvgPath(dataThumbnail));

// Background image
const dataBackgroundImage = { ...demoBackgroundImage };
dataBackgroundImage.breadcrumb = dataBreadcrumb;
export const pageHeaderBackgroundImage = template(
  correctSvgPath(dataBackgroundImage)
);

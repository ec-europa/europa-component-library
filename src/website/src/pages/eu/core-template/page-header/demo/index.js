import demoDefault from '@ecl/specs-component-page-header-core/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header-core/demo/data--background-image';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--eu';

import template from '@ecl/twig-component-page-header-core/page-header-core.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataBreadcrumb = { ...demoBreadcrumbLong };
dataBreadcrumb.links.forEach((item) => {
  item.negative = true;
});

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
dataBackgroundImage.overlay = 'dark';
export const pageHeaderBackgroundImage = template(
  correctSvgPath(dataBackgroundImage)
);

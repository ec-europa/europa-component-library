import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--eu';

import template from '@ecl/twig-component-page-header/page-header.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;
delete dataDefault.thumbnail;
delete dataDefault.background_image_url;
export const pageHeaderDefault = template(correctSvgPath(dataDefault));

// Thumbnail
const dataThumbnail = { ...demoDefault };
dataThumbnail.breadcrumb = dataBreadcrumb;
export const pageHeaderThumbnail = template(correctSvgPath(dataThumbnail));

// Background image
const dataBackgroundImage = { ...demoDefault };
dataBackgroundImage.breadcrumb = dataBreadcrumb;
dataBackgroundImage.overlay = 'dark';
export const pageHeaderBackgroundImage = template(
  correctSvgPath(dataBackgroundImage)
);

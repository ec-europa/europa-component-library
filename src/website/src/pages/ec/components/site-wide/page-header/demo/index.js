import { correctSvgPath } from '@ecl/website-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import template from '@ecl/twig-component-page-header/page-header.html.twig';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;
delete dataDefault.thumbnail;
delete dataDefault.background_image_url;

// Thumbnail
const dataThumbnail = { ...demoDefault };
dataThumbnail.breadcrumb = dataBreadcrumb;

// Background image
const dataBackgroundImage = { ...demoDefault };
dataBackgroundImage.breadcrumb = dataBreadcrumb;

// Core
const prepareCoreData = (data) => {
  data.negative = true;
  data.breadcrumb.links.forEach((item) => {
    item.negative = true;
  });
  return data;
};

export const pageHeaderCoreDefault = template(
  correctSvgPath(prepareCoreData(dataDefault))
);
export const pageHeaderCoreThumbnail = template(
  correctSvgPath(prepareCoreData(dataThumbnail))
);
export const pageHeaderCoreBackgroundImage = template(
  correctSvgPath(prepareCoreData(dataBackgroundImage))
);

// Harmonised
export const pageHeaderHarmonisedDefault = template(
  correctSvgPath(dataDefault)
);

// Standardised
export const pageHeaderStandardisedDefault = template(
  correctSvgPath(dataDefault)
);
export const pageHeaderStandardisedThumbnail = template(
  correctSvgPath(dataThumbnail)
);
export const pageHeaderStandardisedBackgroundImage = template(
  correctSvgPath(dataBackgroundImage)
);

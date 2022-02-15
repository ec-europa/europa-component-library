import { correctSvgPath } from '@ecl/website-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header/demo/data--background-image';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import demoTitleContent from '@ecl/specs-component-page-header/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header/demo/data--meta-title-description';

import template from '@ecl/twig-component-page-header/page-header.html.twig';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;
delete dataDefault.thumbnail;

// Thumbnail
const dataThumbnail = { ...demoDefault };
dataThumbnail.breadcrumb = dataBreadcrumb;

// Background image
const dataBackgroundImage = { ...demoBackgroundImage };
dataBackgroundImage.breadcrumb = dataBreadcrumb;

// Core
const prepareCoreData = (data) => {
  data.variant = 'core';
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
const prepareHarmonisedData = (data) => {
  data.variant = 'harmonised';
  return data;
};
export const pageHeaderHarmonisedTitle = template(
  correctSvgPath(prepareHarmonisedData(demoTitleContent))
);
export const pageHeaderHarmonisedMetaTitle = template(
  correctSvgPath(prepareHarmonisedData(demoMetaTitleContent))
);
export const pageHeaderHarmonisedMetaTitleDescritption = template(
  correctSvgPath(prepareHarmonisedData(demoMetaTitleDescriptionContent))
);

// Standardised
const prepareStandardisedData = (data) => {
  data.variant = 'standardised';
  return data;
};
export const pageHeaderStandardisedDefault = template(
  correctSvgPath(prepareStandardisedData(dataDefault))
);
export const pageHeaderStandardisedThumbnail = template(
  correctSvgPath(prepareStandardisedData(dataThumbnail))
);
export const pageHeaderStandardisedBackgroundImage = template(
  correctSvgPath(prepareStandardisedData(dataBackgroundImage))
);

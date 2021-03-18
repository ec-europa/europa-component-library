import demoBackgroundImage from '@ecl/specs-component-page-header-core/demo/data--background-image';
import demoTitleContent from '@ecl/specs-component-page-header-core/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-core/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-core/demo/data--meta-title-description';
import dataBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

import template from '@ecl/twig-component-page-header-core/page-header-core.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

demoBackgroundImage.breadcrumb = dataBreadcrumbLong;
demoTitleContent.breadcrumb = dataBreadcrumbLong;
demoMetaTitleContent.breadcrumb = dataBreadcrumbLong;
demoMetaTitleDescriptionContent.breadcrumb = dataBreadcrumbLong;

export const pageHeaderTitle = template(correctSvgPath(demoTitleContent));
export const pageHeaderMetaTitle = template(
  correctSvgPath(demoMetaTitleContent)
);
export const pageHeaderMetaTitleDescription = template(
  correctSvgPath(demoMetaTitleDescriptionContent)
);
export const pageHeaderBackgroundImage = template(
  correctSvgPath(demoBackgroundImage)
);

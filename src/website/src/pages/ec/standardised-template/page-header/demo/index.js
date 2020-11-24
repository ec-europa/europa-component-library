import demoTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title-description';
import dataBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data';

import template from '@ecl/twig-component-page-header-standardised/page-header-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

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

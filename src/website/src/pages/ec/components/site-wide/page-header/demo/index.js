import { correctSvgPath } from '@ecl/website-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--long';

import template from '@ecl/twig-component-page-header/page-header.html.twig';

demoDefault.breadcrumb = demoBreadcrumbLong;

const dataDefault = JSON.parse(JSON.stringify(demoDefault));
delete dataDefault.picture_thumbnail;
delete dataDefault.picture_background;

const dataThumbnail = JSON.parse(JSON.stringify(demoDefault));
delete dataThumbnail.picture_background;

const dataBackground = JSON.parse(JSON.stringify(demoDefault));
delete dataBackground.picture_thumbnail;

export const pageHeaderDefault = template(correctSvgPath(dataDefault));
export const pageHeaderThumbnail = template(correctSvgPath(dataThumbnail));
export const pageHeaderBackground = template(correctSvgPath(dataBackground));

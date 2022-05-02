import demoDefault from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLong from '@ecl/specs-component-breadcrumb/demo/data--eu';

import template from '@ecl/twig-component-page-header/page-header.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataBreadcrumb = { ...demoBreadcrumbLong };

// Default
const dataDefault = { ...demoDefault };
dataDefault.breadcrumb = dataBreadcrumb;
export const pageHeaderDefault = template(correctSvgPath(dataDefault));

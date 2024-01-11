import demo from '@ecl/specs-component-navigation-list/demo/data';
import demoIcon from '@ecl/specs-component-navigation-list/demo/data-icon';

import template from '@ecl/twig-component-navigation-list/navigation-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const navigationList = template(correctSvgPath(demo));
export const navigationListIcon = template(correctSvgPath(demoIcon));

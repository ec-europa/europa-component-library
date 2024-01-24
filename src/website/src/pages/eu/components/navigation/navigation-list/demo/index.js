import demo from '@ecl/specs-component-navigation-list/demo/data';
import demoIllustration from '@ecl/specs-component-navigation-list/demo/data-illustration';

import template from '@ecl/twig-component-navigation-list/navigation-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const navigationList = template(correctSvgPath(demo));
export const navigationListIllustration = template(
  correctSvgPath(demoIllustration),
);

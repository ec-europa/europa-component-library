import demo from '@ecl/specs-component-navigation-list/demo/data';

import template from '@ecl/twig-component-navigation-list/navigation-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

demo.items.forEach((item) => {
  item.border = true;
});

export const navigationList = template(correctSvgPath(demo));

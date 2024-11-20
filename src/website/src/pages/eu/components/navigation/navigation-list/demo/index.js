import demo from '@ecl/specs-component-navigation-list/demo/data';
import demoIllustration from '@ecl/specs-component-navigation-list/demo/data-illustration';

import template from '@ecl/twig-component-navigation-list/navigation-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoImageAsIllustration = JSON.parse(JSON.stringify(demoIllustration));
demoImageAsIllustration.items.forEach((item) => {
  item.variant = 'image-as-illustration';
  item.picture.img.src = demo.items[0].picture.img.src;
});

export const navigationList = template(correctSvgPath(demo));
export const navigationListIllustration = template(
  correctSvgPath(demoIllustration),
);
export const navigationListImageAsIllustration = template(
  correctSvgPath(demoImageAsIllustration),
);

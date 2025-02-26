import demoContent from '@ecl/featured-item/demo/data';
import template from '@ecl/featured-item/featured-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentLight = { ...demoContent, type: 'background-light' };
const demoContentStrong = { ...demoContent, type: 'background-strong' };

export const featuredItem = template(correctSvgPath(demoContent));
export const featuredItemRightAlignement = template(
  correctSvgPath({
    ...demoContent,
    position: 'right',
  }),
);
export const featuredItemLight = template(correctSvgPath(demoContentLight));
export const featuredItemLightRightAlignement = template(
  correctSvgPath({
    ...demoContentLight,
    position: 'right',
  }),
);
export const featuredItemStrong = template(correctSvgPath(demoContentStrong));
export const featuredItemStrongRightAlignement = template(
  correctSvgPath({
    ...demoContentStrong,
    position: 'right',
  }),
);

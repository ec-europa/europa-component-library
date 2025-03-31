import demoContent from '@ecl/featured-item/demo/data';
import template from '@ecl/featured-item/featured-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentHighlighted = { ...demoContent, type: 'highlight' };

export const featuredItem = template(correctSvgPath(demoContent));
export const featuredItemRightAlignement = template(
  correctSvgPath({
    ...demoContent,
    position: 'right',
  }),
);
export const featuredItemHighlighted = template(
  correctSvgPath(demoContentHighlighted),
);
export const featuredItemHighlightedRightAlignement = template(
  correctSvgPath({
    ...demoContentHighlighted,
    position: 'right',
  }),
);

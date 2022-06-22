import demoContent from '@ecl/specs-component-featured-item/demo/data';
import demoContentExtended from '@ecl/specs-component-featured-item/demo/data--extended';
import template from '@ecl/twig-component-featured-item/featured-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const featuredItem = template(correctSvgPath(demoContent));
export const featuredItemRightAlignement = template(
  correctSvgPath({
    ...demoContent,
    position: 'right',
  })
);
export const featuredItemExtended = template(
  correctSvgPath(demoContentExtended)
);
export const featuredItemExtendedRightAlignement = template(
  correctSvgPath({
    ...demoContent,
    position: 'right',
  })
);

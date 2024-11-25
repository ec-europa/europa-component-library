import demoContent from '@ecl/specs-component-featured-item/demo/data';
import demoContentSimple from '@ecl/specs-component-featured-item/demo/data--simple';
import demoContentHighlight from '@ecl/specs-component-featured-item/demo/data--highlight';
import template from '@ecl/twig-component-featured-item/featured-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

// Footer is deprecated FRONT-4650
delete demoContent.footer_description;
delete demoContent.footer_link;
delete demoContent.footer_picture;

delete demoContentSimple.footer_description;
delete demoContentSimple.footer_link;
delete demoContentSimple.footer_picture;

delete demoContentHighlight.footer_description;
delete demoContentHighlight.footer_link;
delete demoContentHighlight.footer_picture;

export const featuredItem = template(correctSvgPath(demoContent));
export const featuredItemRightAlignement = template(
  correctSvgPath({
    ...demoContent,
    position: 'right',
  }),
);
export const featuredItemSimple = template(correctSvgPath(demoContentSimple));
export const featuredItemSimpleRightAlignement = template(
  correctSvgPath({
    ...demoContentSimple,
    position: 'right',
  }),
);
export const featuredItemHighlight = template(
  correctSvgPath(demoContentHighlight),
);
export const featuredItemHighlightRightAlignement = template(
  correctSvgPath({
    ...demoContentHighlight,
    position: 'right',
  }),
);

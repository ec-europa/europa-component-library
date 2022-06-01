import demoContent from '@ecl/specs-component-featured-item/demo/data';
import demoContentExtended from '@ecl/specs-component-featured-item/demo/data--extended';
import template from '@ecl/twig-component-featured-item/featured-item.html.twig';

export const featuredItem = template(demoContent);
export const featuredItemRightAlignement = template({
  ...demoContent,
  position: 'right',
});
export const featuredItemExtended = template(demoContentExtended);
export const featuredItemExtendedRightAlignement = template({
  ...demoContentExtended,
  position: 'right',
});

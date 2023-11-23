import demoDefault from '@ecl/specs-component-social-media-follow/demo/data--ec';
import template from '@ecl/twig-component-social-media-follow/social-media-follow.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const socialMediaHorizontal = template(correctSvgPath(demoDefault));
export const socialMediaVertical = template(
  correctSvgPath({ ...demoDefault, variant: 'vertical' }),
);

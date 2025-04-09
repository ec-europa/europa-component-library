import demoDefault from '@ecl/social-media-follow/demo/data--monochrome';
import template from '@ecl/social-media-follow/social-media-follow.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const socialMediaHorizontal = template(correctSvgPath(demoDefault));
export const socialMediaVertical = template(
  correctSvgPath({ ...demoDefault, variant: 'vertical' }),
);

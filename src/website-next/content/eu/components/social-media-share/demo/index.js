import demoDefault from '@ecl/social-media-share/demo/data';
import template from '@ecl/social-media-share/social-media-share.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const socialMediaHorizontal = template(correctSvgPath(demoDefault));
export const socialMediaVertical = template(
  correctSvgPath({ ...demoDefault, variant: 'vertical' }),
);

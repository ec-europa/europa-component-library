import demoDefault from '@ecl/specs-component-social-media-share/demo/data';
import template from '@ecl/twig-component-social-media-share/social-media-share.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const socialMediaHorizontal = template(correctSvgPath(demoDefault));
export const socialMediaVertical = template(
  correctSvgPath({ ...demoDefault, variant: 'vertical' })
);

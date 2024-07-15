import demoDefault from '@ecl/specs-component-social-media-follow/demo/data--monochrome';
import demoColor from '@ecl/specs-component-social-media-follow/demo/data--color';
import template from '@ecl/twig-component-social-media-follow/social-media-follow.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const socialMediaHorizontal = template(correctSvgPath(demoDefault));
export const socialMediaVertical = template(
  correctSvgPath({ ...demoDefault, variant: 'vertical' }),
);
export const socialMediaHorizontalColor = template(correctSvgPath(demoColor));
export const socialMediaVerticalColor = template(
  correctSvgPath({ ...demoColor, variant: 'vertical' }),
);
export const socialMediaHorizontalColorRight = template(
  correctSvgPath({ ...demoColor, position: 'right' }),
);
export const socialMediaVerticalColorRight = template(
  correctSvgPath({ ...demoColor, variant: 'vertical', position: 'right' }),
);

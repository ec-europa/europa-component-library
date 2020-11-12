import demoDefault from '@ecl/specs-component-social-media-follow/demo/data';
import template from '@ecl/twig-component-social-media-follow/social-media-follow.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demo = correctSvgPath(demoDefault);
const demoVertical = { ...demo, variant: 'vertical' };

export const socialMediaHorizontal = template(demo);
export const socialMediaVertical = template(demoVertical);

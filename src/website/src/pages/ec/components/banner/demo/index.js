import demoContentImage from '@ecl/specs-component-banner/demo/data--image';
import demoContentVideo from '@ecl/specs-component-banner/demo/data--video';

import template from '@ecl/twig-component-banner/banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const bannerImage = template(correctSvgPath(demoContentImage));
export const bannerVideo = template(correctSvgPath(demoContentVideo));

import demoContentImage from '@ecl/banner/demo/data--image';
import demoContentVideo from '@ecl/banner/demo/data--video';

import template from '@ecl/banner/banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

demoContentImage.description = demoContentImage.description.link.label;
demoContentVideo.description = demoContentVideo.description.link.label;

export const bannerImage = template(correctSvgPath(demoContentImage));
export const bannerVideo = template(correctSvgPath(demoContentVideo));

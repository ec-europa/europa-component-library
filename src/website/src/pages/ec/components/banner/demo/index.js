import demoContentImageBox from '@ecl/specs-component-banner/demo/data--image-box';
import demoContentImageShade from '@ecl/specs-component-banner/demo/data--image-shade';
import demoContentImageGradient from '@ecl/specs-component-banner/demo/data--image-gradient';
import demoContentPrimary from '@ecl/specs-component-banner/demo/data--primary';

import template from '@ecl/twig-component-banner/banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const bannerImageBox = template(correctSvgPath(demoContentImageBox));
export const bannerImageShade = template(correctSvgPath(demoContentImageShade));
export const bannerImageGradient = template(
  correctSvgPath(demoContentImageGradient)
);
export const bannerPrimary = template(correctSvgPath(demoContentPrimary));

import demoContentImageBox from '@ecl/specs-component-page-banner/demo/data--image-box';
import demoContentImageShade from '@ecl/specs-component-page-banner/demo/data--image-shade';
import demoContentImageGradient from '@ecl/specs-component-page-banner/demo/data--image-gradient';
import demoContentSimplePrimary from '@ecl/specs-component-page-banner/demo/data--simple-primary';

import template from '@ecl/twig-component-page-banner/page-banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const pageBannerImageBox = template(correctSvgPath(demoContentImageBox));
export const pageBannerImageShade = template(
  correctSvgPath(demoContentImageShade)
);
export const pageBannerImageGradient = template(
  correctSvgPath(demoContentImageGradient)
);
export const pageBannerSimplePrimary = template(
  correctSvgPath(demoContentSimplePrimary)
);

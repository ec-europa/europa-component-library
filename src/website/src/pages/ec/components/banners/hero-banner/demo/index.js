import demoContentImageBox from '@ecl/specs-component-hero-banner/demo/data--image-box';
import demoContentImageShade from '@ecl/specs-component-hero-banner/demo/data--image-shade';
import demoContentImageGradient from '@ecl/specs-component-hero-banner/demo/data--image-gradient';
import demoContentSimplePrimary from '@ecl/specs-component-hero-banner/demo/data--simple-primary';
import template from '@ecl/twig-component-hero-banner/hero-banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const heroBannerImageBox = template(
  correctSvgPath(correctSvgPath(demoContentImageBox))
);
export const heroBannerImageShade = template(
  correctSvgPath(demoContentImageShade)
);
export const heroBannerImageGradient = template(
  correctSvgPath(demoContentImageGradient)
);
export const heroBannerSimplePrimary = template(
  correctSvgPath(demoContentSimplePrimary)
);

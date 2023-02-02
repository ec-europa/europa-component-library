import demoContentTextBox from '@ecl/specs-component-banner/demo/data--text-box';
import demoContentImageOverlay from '@ecl/specs-component-banner/demo/data--image-overlay';
import demoContentTextHighlight from '@ecl/specs-component-banner/demo/data--text-highlight';
import demoContentPlainBackground from '@ecl/specs-component-banner/demo/data--plain-background';

import template from '@ecl/twig-component-banner/banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const bannerTextBox = template(
  correctSvgPath(correctSvgPath(demoContentTextBox))
);
export const bannerImageOverlay = template(
  correctSvgPath(demoContentImageOverlay)
);
export const bannerTextHighlight = template(
  correctSvgPath(demoContentTextHighlight)
);
export const bannerPlainBackground = template(
  correctSvgPath(demoContentPlainBackground)
);

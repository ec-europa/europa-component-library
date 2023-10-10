import demoContentTextBox from '@ecl/specs-component-banner/demo/data--text-box';
import demoContentTextOverlay from '@ecl/specs-component-banner/demo/data--text-overlay';
import demoContentPlainBackground from '@ecl/specs-component-banner/demo/data--plain-background';

import template from '@ecl/twig-component-banner/banner.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const bannerTextBox = template(correctSvgPath(demoContentTextBox));

export const bannerTextOverlay = template(
  correctSvgPath(demoContentTextOverlay),
);
export const bannerPlainBackground = template(
  correctSvgPath(demoContentPlainBackground),
);

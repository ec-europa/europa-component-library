import dataImage from '@ecl/specs-component-list-illustration/demo/data--image';
import dataIcon from '@ecl/specs-component-list-illustration/demo/data--icon';

import template from '@ecl/twig-component-list-illustration/list-illustration.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataImageSquare = JSON.parse(JSON.stringify(dataImage));
dataImageSquare.items.forEach((item) => {
  item.image.squared = true;
});

export const listIllustrationVerticalWithImage = template(
  correctSvgPath(dataImage)
);
export const listIllustrationVerticalWithImageSquare = template(
  correctSvgPath(dataImageSquare)
);
export const listIllustrationVerticalWithIcon = template(
  correctSvgPath(dataIcon)
);

export const listIllustrationHorizontalWithImage = template(
  correctSvgPath({ ...dataImage, column: 3 })
);
export const listIllustrationHorizontalWithImageSquare = template(
  correctSvgPath({ ...dataImageSquare, column: 3 })
);
export const listIllustrationHorizontalWithIcon = template(
  correctSvgPath({ ...dataIcon, column: 3 })
);

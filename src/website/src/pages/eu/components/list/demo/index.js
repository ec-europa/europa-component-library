import demoContentUnorderedUnstyled from '@ecl/specs-component-unordered-list/demo/data--unstyled';
import demoContentUnorderedText from '@ecl/specs-component-unordered-list/demo/data--text';
import demoContentUnorderedWithDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';

import demoContentOrdered from '@ecl/specs-component-ordered-list/demo/data--text';

import demoContentDescriptionDefault from '@ecl/specs-component-description-list/demo/data--default';
import demoContentDescriptionHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import templateUnordered from '@ecl/twig-component-unordered-list/unordered-list.html.twig';
import templateOrdered from '@ecl/twig-component-ordered-list/ordered-list.html.twig';
import templateDescription from '@ecl/twig-component-description-list/description-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const listOrdered = templateOrdered(demoContentOrdered);
export const listUnordered = templateUnordered(demoContentUnorderedText);
export const listUnorderedUnstyled = templateUnordered(
  demoContentUnorderedUnstyled,
);
export const listUnorderedWithDivider = templateUnordered(
  demoContentUnorderedWithDivider,
);
export const listDescription = templateDescription(
  correctSvgPath(demoContentDescriptionDefault),
);
export const listDescriptionHorizontal = templateDescription(
  correctSvgPath(demoContentDescriptionHorizontal),
);

import demoContentUnorderedNoBullet from '@ecl/specs-component-unordered-list/demo/data--no-bullet';
import demoContentUnorderedText from '@ecl/specs-component-unordered-list/demo/data--text';
import demoContentUnorderedWithDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';

import demoContentOrdered from '@ecl/specs-component-ordered-list/demo/data';

import demoContentDescriptionDefault from '@ecl/specs-component-description-list/demo/data--default';
import demoContentDescriptionHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import templateUnordered from '@ecl/twig-component-unordered-list/unordered-list.html.twig';
import templateOrdered from '@ecl/twig-component-ordered-list/ordered-list.html.twig';
import templateDescription from '@ecl/twig-component-description-list/description-list.html.twig';

export const listOrdered = templateOrdered(demoContentOrdered);
export const listUnordered = templateUnordered(demoContentUnorderedText);
export const listUnorderedNoBullet = templateUnordered(
  demoContentUnorderedNoBullet
);
export const listUnorderedWithDivider = templateUnordered(
  demoContentUnorderedWithDivider
);
export const listDescription = templateDescription(
  demoContentDescriptionDefault
);
export const listDescriptionHorizontal = templateDescription(
  demoContentDescriptionHorizontal
);

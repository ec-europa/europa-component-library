import demoContentDisplay from '@ecl/specs-component-tag/demo/data--display';
import demoContentLink from '@ecl/specs-component-tag/demo/data--link';
import demoContentRemovable from '@ecl/specs-component-tag/demo/data--removable';
import template from '@ecl/twig-component-tag/tag.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const tagDisplay = template(demoContentDisplay);
export const tagLink = template(demoContentLink);
export const tagRemovable = template(correctSvgPath(demoContentRemovable));

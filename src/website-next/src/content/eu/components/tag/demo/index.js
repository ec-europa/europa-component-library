import demoContentLink from '@ecl/tag/demo/data--link';
import demoContentRemovable from '@ecl/tag/demo/data--removable';
import demoContentSet from '@ecl/tag/demo/data--set';
import template from '@ecl/tag/tag.html.twig';
import templateSet from '@ecl/tag/tag-set.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const tagLink = template(demoContentLink);
export const tagRemovable = template(correctSvgPath(demoContentRemovable));
export const tagSet = templateSet(correctSvgPath(demoContentSet));

import demoContentLink from '@ecl/specs-component-tag/demo/data--link';
import demoContentRemovable from '@ecl/specs-component-tag/demo/data--removable';
import demoContentSet from '@ecl/specs-component-tag/demo/data--set';
import template from '@ecl/twig-component-tag/tag.html.twig';
import templateSet from '@ecl/twig-component-tag/tag-set.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const tagLink = template(demoContentLink);
export const tagRemovable = template(correctSvgPath(demoContentRemovable));
export const tagSet = templateSet(correctSvgPath(demoContentSet));

import demoContentDefault from '@ecl/specs-component-checkbox/demo/data--default';
import demoContentInvalid from '@ecl/specs-component-checkbox/demo/data--invalid';
import template from '@ecl/twig-component-checkbox/checkbox-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const checkboxDefault = template(correctSvgPath(demoContentDefault));
export const checkboxInvalid = template(correctSvgPath(demoContentInvalid));

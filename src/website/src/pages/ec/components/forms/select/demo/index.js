import demoContentSingle from '@ecl/specs-component-select/demo/data-single';
import demoContentMultiple from '@ecl/specs-component-select/demo/data-multiple';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const selectSingle = template(correctSvgPath(demoContentSingle));
export const selectMultiple = template(correctSvgPath(demoContentMultiple));

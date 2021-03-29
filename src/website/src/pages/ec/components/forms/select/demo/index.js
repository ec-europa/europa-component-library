import demoContentSingle from '@ecl/specs-component-select/demo/data-single--ec';
import demoContentMultiple from '@ecl/specs-component-select/demo/data-multiple--ec';
import template from '@ecl/twig-component-select/select.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const selectSingle = template(correctSvgPath(demoContentSingle));
export const selectMultiple = template(correctSvgPath(demoContentMultiple));

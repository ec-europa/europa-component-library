import demoContent from '@ecl/specs-component-datepicker/demo/data--ec';
import template from '@ecl/twig-component-datepicker/datepicker.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const datepicker = template(correctSvgPath(demoContent));

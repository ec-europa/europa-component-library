import demoContent from '@ecl/specs-component-datepicker/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const datepicker = template(correctSvgPath(demoContent));

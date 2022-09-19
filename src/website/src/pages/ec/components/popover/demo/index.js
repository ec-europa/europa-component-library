import data from '@ecl/specs-component-popover/demo/data';
import template from '@ecl/twig-component-popover/popover.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const popover = template(correctSvgPath(data));
export default popover;

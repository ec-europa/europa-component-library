import data from '@ecl/popover/demo/data';
import template from '@ecl/popover/popover.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const popover = template(correctSvgPath(data));
export default popover;

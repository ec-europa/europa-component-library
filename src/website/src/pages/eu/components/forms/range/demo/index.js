import data from '@ecl/specs-component-range/demo/data';
import template from '@ecl/twig-component-range/range.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const range = template(correctSvgPath(data));
export default range;

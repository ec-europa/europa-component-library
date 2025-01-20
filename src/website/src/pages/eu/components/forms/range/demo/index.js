import data from '@ecl/range/demo/data';
import template from '@ecl/form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const range = template(correctSvgPath(data));
export default range;

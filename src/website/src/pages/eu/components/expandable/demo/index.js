import data from '@ecl/expandable/demo/data';
import template from '@ecl/expandable/expandable.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const expandable = template(correctSvgPath(data));
export default expandable;

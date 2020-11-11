import data from '@ecl/specs-component-expandable/demo/data';
import template from '@ecl/twig-component-expandable/expandable.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const expandable = template(correctSvgPath(data));
export default expandable;

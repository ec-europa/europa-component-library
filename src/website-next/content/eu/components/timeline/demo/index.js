import data from '@ecl/timeline/demo/data';
import template from '@ecl/timeline/timeline.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const timeline = template(correctSvgPath(data));
export default timeline;

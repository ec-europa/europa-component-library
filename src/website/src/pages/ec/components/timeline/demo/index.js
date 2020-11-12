import data from '@ecl/specs-component-timeline/demo/data';
import template from '@ecl/twig-component-timeline/timeline.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const timeline = template(correctSvgPath(data));
export default timeline;

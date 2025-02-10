import data from '@ecl/modal/demo/data';
import template from '@ecl/modal/modal.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const modal = template(correctSvgPath(data));
export default modal;

import data from '@ecl/specs-component-modal/demo/data-eu';
import template from '@ecl/twig-component-modal/modal.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const modal = template(correctSvgPath(data));
export default modal;

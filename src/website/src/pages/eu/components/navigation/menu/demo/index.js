import data from '@ecl/specs-component-menu/demo/data--en';
import template from '@ecl/twig-component-menu/menu.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const menu = template(correctSvgPath(data));
export default menu;

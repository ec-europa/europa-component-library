import data from '@ecl/specs-component-mega-menu/demo/data';
import template from '@ecl/twig-component-mega-menu/mega-menu.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const megaMenu = template(correctSvgPath(data));
export default megaMenu;

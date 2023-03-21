import demoData from '@ecl/specs-component-inpage-navigation/demo/data';
import template from '@ecl/twig-component-inpage-navigation/inpage-navigation.html.twig';
import { correctSvgPath } from '@ecl/website-utils';
import markup from '../examples/default.html';

const inpageNavigation = template(correctSvgPath(demoData));
const inpageNavigationExample = markup.replace(/{####}/g, inpageNavigation);

export default inpageNavigationExample;

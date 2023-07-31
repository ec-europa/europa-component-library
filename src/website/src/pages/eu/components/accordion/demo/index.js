import demoContent from '@ecl/specs-component-accordion/demo/data';
import template from '@ecl/twig-component-accordion/accordion.html.twig';

demoContent.icon.size = 'm';
const accordion = template(demoContent);
export default accordion;

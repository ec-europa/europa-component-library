import demoContent from '@ecl/accordion/demo/data';
import template from '@ecl/accordion/accordion.html.twig';

demoContent.icon.size = 'm';
const accordion = template(demoContent);
export default accordion;

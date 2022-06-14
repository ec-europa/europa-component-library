import demoContent from '@ecl/specs-component-footer-core/demo/data--eu';
import template from '@ecl/twig-component-footer-core/footer-core.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const footerCore = template(correctSvgPath(demoContent));
export default footerCore;

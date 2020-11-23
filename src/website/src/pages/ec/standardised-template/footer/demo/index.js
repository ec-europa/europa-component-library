import demoContent from '@ecl/specs-component-footer-standardised/demo/data';
import template from '@ecl/twig-component-footer-standardised/footer-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const footerStandardised = template(correctSvgPath(demoContent));

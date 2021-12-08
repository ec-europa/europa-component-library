import demoContent from '@ecl/specs-component-footer-standardised/demo/data--eu';
import template from '@ecl/twig-component-footer-standardised/footer-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const footerHarmonised = template(correctSvgPath(demoContent));

import demoContent from '@ecl/specs-component-site-header-standardised/demo/data';
import demoContentFr from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import template from '@ecl/twig-component-site-header-standardised/site-header-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentLoggedIn = { ...demoContent, logged: true };

export const siteHeaderHarmonised = template(correctSvgPath(demoContent));
export const siteHeaderHarmonisedTranslated = template(
  correctSvgPath(demoContentFr)
);
export const siteHeaderHarmonisedLoggedIn = template(
  correctSvgPath(demoContentLoggedIn)
);

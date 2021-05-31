import demoContent from '@ecl/specs-component-site-header-standardised/demo/data';
import demoContentFr from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import template from '@ecl/twig-component-site-header-standardised/site-header-standardised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentLoggedIn = { ...demoContent, logged: true };

export const siteHeaderStandardised = template(correctSvgPath(demoContent));
export const siteHeaderStandardisedTranslated = template(
  correctSvgPath(demoContentFr)
);
export const siteHeaderStandardisedLoggedIn = template(
  correctSvgPath(demoContentLoggedIn)
);

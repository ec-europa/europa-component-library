import demoContent from '@ecl/specs-component-site-header-core/demo/data';
import demoContentFr from '@ecl/specs-component-site-header-core/demo/data--fr';
import template from '@ecl/twig-component-site-header-core/site-header-core.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentLoggedIn = { ...demoContent, logged: true };

export const siteHeaderCore = template(correctSvgPath(demoContent));
export const siteHeaderCoreTranslated = template(correctSvgPath(demoContentFr));
export const siteHeaderCoreLoggedIn = template(
  correctSvgPath(demoContentLoggedIn)
);

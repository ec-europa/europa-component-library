import demoContentDefault from '@ecl/specs-component-link/demo/data--default';
import demoContentStandalone from '@ecl/specs-component-link/demo/data--standalone';
import demoContentCTA from '@ecl/specs-component-link/demo/data--cta';
import demoContentPrimary from '@ecl/specs-component-link/demo/data--primary';
import demoContentSecondary from '@ecl/specs-component-link/demo/data--secondary';
import demoContentIcon from '@ecl/specs-component-link/demo/data--icon';
import demoContentNegative from '@ecl/specs-component-link/demo/data--negative';
import template from '@ecl/twig-component-link/link.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const linkDefault = template(demoContentDefault);
export const linkStandalone = template(demoContentStandalone);
export const linkCTA = template(demoContentCTA);
export const linkPrimary = template(demoContentPrimary);
export const linkSecondary = template(demoContentSecondary);
export const linkIcon = template(correctSvgPath(demoContentIcon));
export const linkNegative = template(correctSvgPath(demoContentNegative));

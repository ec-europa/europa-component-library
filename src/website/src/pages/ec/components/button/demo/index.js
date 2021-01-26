import demoContentPrimary from '@ecl/specs-component-button/demo/data--primary';
import demoContentSecondary from '@ecl/specs-component-button/demo/data--secondary';
import demoContentCall from '@ecl/specs-component-button/demo/data--call';
import demoContentGhost from '@ecl/specs-component-button/demo/data--ghost';
import template from '@ecl/twig-component-button/button.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const buttonPrimary = template(demoContentPrimary);
export const buttonSecondary = template(demoContentSecondary);
export const buttonCall = template(correctSvgPath(demoContentCall));
export const buttonGhost = template(demoContentGhost);

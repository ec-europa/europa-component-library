import demoContentPrimary from '@ecl/specs-component-button/demo/data--primary';
import demoContentSecondary from '@ecl/specs-component-button/demo/data--secondary';
import demoContentCall from '@ecl/specs-component-button/demo/data--call';
import demoContentGhost from '@ecl/specs-component-button/demo/data--ghost';
import template from '@ecl/twig-component-button/button.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentIcon = {
  ...demoContentSecondary,
  icon: {
    path: '/icons.svg',
    name: 'corner-arrow',
    size: 's',
    transform: 'rotate-90',
  },
  hide_label: true,
};

export const buttonPrimary = template(demoContentPrimary);
export const buttonSecondary = template(demoContentSecondary);
export const buttonCall = template(demoContentCall);
export const buttonGhost = template(demoContentGhost);
export const buttonIconOnly = template(correctSvgPath(demoContentIcon));

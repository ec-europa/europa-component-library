import demoContentPrimary from '@ecl/button/demo/data--primary';
import demoContentSecondary from '@ecl/button/demo/data--secondary';
import demoContentCall from '@ecl/button/demo/data--call';
import demoContentGhost from '@ecl/button/demo/data--ghost';
import demoContentGhostInverted from '@ecl/button/demo/data--ghost-inverted';
import demoContentTertiary from '@ecl/button/demo/data--tertiary';
import template from '@ecl/button/button.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentIcon = {
  ...demoContentSecondary,
  icon: {
    path: '/icons.svg',
    name: 'corner-arrow',
    size: 'xs',
    transform: 'rotate-90',
  },
  hide_label: true,
};

export const buttonPrimary = template(demoContentPrimary);
export const buttonSecondary = template(demoContentSecondary);
export const buttonTertiary = template(demoContentTertiary);
export const buttonCall = template(demoContentCall);
export const buttonGhost = template(demoContentGhost);
export const buttonGhostInverted = template(demoContentGhostInverted);
export const buttonIconOnly = template(correctSvgPath(demoContentIcon));

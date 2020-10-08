import demoContentPrimary from '@ecl/ec-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/ec-specs-button/demo/data--call';
import demoContentGhost from '@ecl/ec-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/ec-specs-button/demo/data--search';
import template from '@ecl/ec-twig-component-button/ecl-button.html.twig';
import correctSvgPath from '../../../../../utils/correctSvgPath';

export const buttonPrimary = template(demoContentPrimary);
export const buttonSecondary = template(demoContentSecondary);
export const buttonCall = template(correctSvgPath(demoContentCall));
export const buttonGhost = template(demoContentGhost);
export const buttonSearch = template(demoContentSearch);

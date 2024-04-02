import data from '@ecl/specs-component-splash-page/demo/data--eu';
import template from '@ecl/twig-component-splash-page/splash-page.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const splashPage = template(correctSvgPath(data));

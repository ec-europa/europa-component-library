import data from '@ecl/splash-page/demo/data--ec';
import template from '@ecl/splash-page/splash-page.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const splashPage = template(correctSvgPath(data));

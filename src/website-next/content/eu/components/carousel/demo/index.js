import demoContent from '@ecl/carousel/demo/data';
import template from '@ecl/carousel/carousel.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const carousel = template(correctSvgPath(demoContent));

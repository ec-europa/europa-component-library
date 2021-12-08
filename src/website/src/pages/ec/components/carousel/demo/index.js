import demoContent from '@ecl/specs-component-carousel/demo/data';
import template from '@ecl/twig-component-carousel/carousel.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const carousel = template(correctSvgPath(demoContent));

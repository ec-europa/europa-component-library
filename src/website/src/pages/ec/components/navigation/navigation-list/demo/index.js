import demoImage from '@ecl/specs-component-navigation-list/demo/data--image';
import demoEvent from '@ecl/specs-component-navigation-list/demo/data--event';

import template from '@ecl/twig-component-navigation-list/navigation-list.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataImageRight = { ...demoImage };
dataImageRight.variant = 'image-right';

export const contentItemImage = template(correctSvgPath(demoImage));
export const contentItemImageRight = template(correctSvgPath(dataImageRight));
export const contentItemEvent = template(correctSvgPath(demoEvent));

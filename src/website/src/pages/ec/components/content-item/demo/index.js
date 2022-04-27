import demoImage from '@ecl/specs-component-content-item/demo/data--image';
import demoEvent from '@ecl/specs-component-content-item/demo/data--event';

import template from '@ecl/twig-component-content-item/content-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataImageRight = { ...demoImage };
dataImageRight.picture.position = 'right';

export const contentItemImage = template(correctSvgPath(demoImage));
export const contentItemImageRight = template(correctSvgPath(dataImageRight));
export const contentItemEvent = template(correctSvgPath(demoEvent));

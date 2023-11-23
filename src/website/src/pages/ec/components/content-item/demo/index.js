import demoImage from '@ecl/specs-component-content-item/demo/data--image';
import demoEvent from '@ecl/specs-component-content-item/demo/data--event';

import template from '@ecl/twig-component-content-item/content-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataImageRight = JSON.parse(JSON.stringify(demoImage));
dataImageRight.picture.position = 'right';

const dataImageTop = JSON.parse(JSON.stringify(demoImage));
dataImageTop.picture.position = 'top';

export const contentItemImage = template(correctSvgPath(demoImage));
export const contentItemImageRight = template(correctSvgPath(dataImageRight));
export const contentItemImageTop = template(correctSvgPath(dataImageTop));
export const contentItemEvent = template(correctSvgPath(demoEvent));

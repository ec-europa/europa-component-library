import demoContentCardEvent from '@ecl/specs-component-card/demo/data--card-event';
import demoContentCardTag from '@ecl/specs-component-card/demo/data--card-tag';
import demoContentCard from '@ecl/specs-component-card/demo/data--card';
import demoContentTile from '@ecl/specs-component-card/demo/data--tile';

import template from '@ecl/twig-component-card/card.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const cardEvent = template(correctSvgPath(demoContentCardEvent));
export const cardTag = template(correctSvgPath(demoContentCardTag));
export const card = template(correctSvgPath(demoContentCard));
export const tile = template(correctSvgPath(demoContentTile));

import demoContentCard from '@ecl/specs-component-card/demo/data--card';
import demoContentCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import demoContentTile from '@ecl/specs-component-card/demo/data--tile';
import demoContentTileTaxonomy from '@ecl/specs-component-card/demo/data--tile-taxonomy';

import template from '@ecl/twig-component-card/card.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const card = template(correctSvgPath(demoContentCard));
export const cardTaxonomy = template(correctSvgPath(demoContentCardTaxonomy));
export const tile = template(correctSvgPath(demoContentTile));
export const tileTaxonomy = template(correctSvgPath(demoContentTileTaxonomy));

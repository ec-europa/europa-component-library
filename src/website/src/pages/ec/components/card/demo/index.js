import demoContentCard from '@ecl/specs-component-card/demo/data--card';
import demoContentCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';

import template from '@ecl/twig-component-card/card.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const card = template(correctSvgPath(demoContentCard));
export const cardTaxonomy = template(correctSvgPath(demoContentCardTaxonomy));

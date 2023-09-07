import dataCard from '@ecl/specs-component-card/demo/data';

import template from '@ecl/twig-component-card/card.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataCardDefault = JSON.parse(JSON.stringify(dataCard));
delete dataCardDefault.lists;

const dataCardLists = JSON.parse(JSON.stringify(dataCard));

export const card = template(correctSvgPath(dataCardDefault));
export const cardLists = template(correctSvgPath(dataCardLists));

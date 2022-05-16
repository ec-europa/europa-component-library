import dataCard from '@ecl/specs-component-card/demo/data';

import template from '@ecl/twig-component-card/card.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const dataCardDefault = JSON.parse(JSON.stringify(dataCard));
delete dataCardDefault.tags;
delete dataCardDefault.lists;

const dataCardTags = JSON.parse(JSON.stringify(dataCard));
delete dataCardTags.lists;

const dataCardLists = JSON.parse(JSON.stringify(dataCard));
delete dataCardLists.tags;

export const card = template(correctSvgPath(dataCardDefault));
export const cardTags = template(correctSvgPath(dataCardTags));
export const cardLists = template(correctSvgPath(dataCardLists));

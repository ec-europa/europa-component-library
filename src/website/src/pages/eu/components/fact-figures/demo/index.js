import demoContent from '@ecl/specs-component-fact-figures/demo/data';
import template from '@ecl/twig-component-fact-figures/fact-figures.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demo1Col = { ...demoContent, column: 1 };
demo1Col.items = demo1Col.items.slice(0, 1);
const demo2Col = { ...demoContent, column: 2 };
demo2Col.items = demo2Col.items.slice(0, 2);
const demo3Col = { ...demoContent, column: 3 };
demo3Col.items = demo3Col.items.slice(0, 6);
const demo4Col = { ...demoContent, column: 4 };

export const factFigures1Col = template(correctSvgPath(demo1Col));
export const factFigures2Col = template(correctSvgPath(demo2Col));
export const factFigures3Col = template(correctSvgPath(demo3Col));
export const factFigures4Col = template(correctSvgPath(demo4Col));

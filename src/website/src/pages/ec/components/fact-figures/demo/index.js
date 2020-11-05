import demoContent3Col from '@ecl/specs-component-fact-figures/demo/data--3-col';
import demoContent4Col from '@ecl/specs-component-fact-figures/demo/data--4-col';
import template from '@ecl/twig-component-fact-figures/fact-figures.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const factFigures3Col = template(correctSvgPath(demoContent3Col));
export const factFigures4Col = template(correctSvgPath(demoContent4Col));

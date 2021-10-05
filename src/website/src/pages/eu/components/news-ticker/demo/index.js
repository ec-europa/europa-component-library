import demoContent from '@ecl/specs-component-news-ticker/demo/data';
import template from '@ecl/twig-component-news-ticker/news-ticker.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const newsTicker = template(correctSvgPath(demoContent));

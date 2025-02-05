import demoContent from '@ecl/news-ticker/demo/data';
import template from '@ecl/news-ticker/news-ticker.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const newsTicker = template(correctSvgPath(demoContent));

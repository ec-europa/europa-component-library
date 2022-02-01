import data from '@ecl/specs-component-category-filter/demo/data';
import template from '@ecl/twig-component-category-filter/category-filter.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const categoryFilter = template(correctSvgPath(data));
export default categoryFilter;

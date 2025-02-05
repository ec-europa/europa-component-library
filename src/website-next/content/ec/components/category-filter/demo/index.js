import data from '@ecl/category-filter/demo/data';
import template from '@ecl/category-filter/category-filter.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const categoryFilter = template(correctSvgPath(data));
export default categoryFilter;

import demoContent from '@ecl/specs-component-search-form/demo/data';
import template from '@ecl/twig-component-search-form/search-form.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const searchForm = template(correctSvgPath(demoContent));
export default searchForm;

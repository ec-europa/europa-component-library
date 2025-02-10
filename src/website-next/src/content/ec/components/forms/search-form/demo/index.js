import demoContent from '@ecl/search-form/demo/data--ec';
import template from '@ecl/search-form/search-form.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const searchForm = template(correctSvgPath(demoContent));
export default searchForm;

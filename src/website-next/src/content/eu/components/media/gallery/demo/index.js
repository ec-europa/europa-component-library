import demoContent from '@ecl/gallery/demo/data';
import template from '@ecl/gallery/gallery.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const gallery = template(correctSvgPath(demoContent));
export default gallery;

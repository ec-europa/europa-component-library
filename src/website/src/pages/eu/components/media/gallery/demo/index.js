import demoContent from '@ecl/specs-component-gallery/demo/data';
import template from '@ecl/twig-component-gallery/gallery.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const gallery = template(correctSvgPath(demoContent));
export default gallery;

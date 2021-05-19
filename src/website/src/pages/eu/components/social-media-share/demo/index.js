import demoContent from '@ecl/specs-component-social-media-share/demo/data';
import template from '@ecl/twig-component-social-media-share/social-media-share.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export default template(correctSvgPath(demoContent));

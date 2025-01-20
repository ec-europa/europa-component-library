import demoContent from '@ecl/tabs/demo/data';
import template from '@ecl/tabs/tabs.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const tabs = template(correctSvgPath(demoContent));

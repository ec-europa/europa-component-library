import demoContent from '@ecl/specs-component-tabs/demo/data';
import template from '@ecl/twig-component-tabs/tabs.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const tabs = template(correctSvgPath(demoContent));

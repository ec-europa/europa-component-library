import demoContentDefault from '@ecl/specs-component-text-area/demo/data--default';
import demoContentDisabled from '@ecl/specs-component-text-area/demo/data--disabled';
import demoContentWithError from '@ecl/specs-component-text-area/demo/data--with-error';
import template from '@ecl/twig-component-text-area/text-area.html.twig';

export const textAreaDefault = template(demoContentDefault);
export const textAreaDisabled = template(demoContentDisabled);
export const textAreaWithError = template(demoContentWithError);

import demoContentDefault from '@ecl/specs-component-text-input/demo/data--default';
import demoContentDisabled from '@ecl/specs-component-text-input/demo/data--disabled';
import demoContentWithError from '@ecl/specs-component-text-input/demo/data--with-error';
import template from '@ecl/twig-component-text-input/text-input.html.twig';

export const textInputDefault = template(demoContentDefault);
export const textInputDisabled = template(demoContentDisabled);
export const textInputWithError = template(demoContentWithError);

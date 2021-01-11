import demoContentDefault from '@ecl/specs-component-text-input/demo/data';
import template from '@ecl/twig-component-text-input/text-input.html.twig';

export const textInputDefault = template(demoContentDefault);
export const textInputDisabled = template({
  ...demoContentDefault,
  disabled: true,
});
export const textInputInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const textInputOptional = template({
  ...demoContentDefault,
  required: false,
});

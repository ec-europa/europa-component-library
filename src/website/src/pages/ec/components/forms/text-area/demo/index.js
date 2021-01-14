import demoContentDefault from '@ecl/specs-component-text-area/demo/data';
import template from '@ecl/twig-component-text-area/text-area.html.twig';

export const textAreaDefault = template(demoContentDefault);
export const textAreaDisabled = template({
  ...demoContentDefault,
  disabled: true,
});
export const textAreaInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const textAreaOptional = template({
  ...demoContentDefault,
  required: false,
});

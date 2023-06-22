import demoContentDefault from '@ecl/specs-component-text-area/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';

export const textAreaDefault = template(demoContentDefault);
export const textAreaDisabled = template({
  ...demoContentDefault,
  disabled: true,
});
export const textAreaInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const textAreaRequired = template({
  ...demoContentDefault,
  required: true,
});

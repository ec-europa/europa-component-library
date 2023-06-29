import demoContentDefault from '@ecl/specs-component-radio/demo/data--default';
import demoContentBinary from '@ecl/specs-component-radio/demo/data--binary';
import template from '@ecl/twig-component-form-group/form-group.html.twig';

export const radioGroupDefault = template(demoContentDefault);
export const radioGroupInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const radioGroupOptional = template({
  ...demoContentDefault,
  required: false,
  input: {
    ...demoContentDefault.input,
    required: false,
  },
});
export const radioGroupBinary = template(demoContentBinary);
export const radioGroupBinaryInvalid = template({
  ...demoContentBinary,
  invalid: true,
});

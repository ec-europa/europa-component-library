import demoContentDefault from '@ecl/specs-component-text-input/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

correctSvgPath(demoContentDefault);

export const textInputDefault = template(demoContentDefault);
export const textInputDisabled = template({
  ...demoContentDefault,
  disabled: true,
});
export const textInputInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const textInputRequired = template({
  ...demoContentDefault,
  required: true,
});

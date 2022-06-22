import demoContentDefault from '@ecl/specs-component-five-stars/demo/data';
import template from '@ecl/twig-component-five-stars/five-stars.html.twig';

export const fiveStarsGroupDefault = template(demoContentDefault);
export const fiveStarsGroupInvalid = template({
  ...demoContentDefault,
  invalid: true,
});
export const fiveStarsGroupOptional = template({
  ...demoContentDefault,
  required: false,
});

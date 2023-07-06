import demoContentDefault from '@ecl/specs-component-rating-field/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

const demoContentSelected = JSON.parse(JSON.stringify(demoContentDefault));
demoContentSelected.label = '';
demoContentSelected.helper_text = '';
demoContentSelected.input.items[2].checked = true;

export const ratingFieldGroupDefault = template(
  correctSvgPath({
    ...demoContentDefault,
    id: 'rating-default',
    name: 'rating-default',
  }),
);
export const ratingFieldGroupInvalid = template(
  correctSvgPath({
    ...demoContentDefault,
    id: 'rating-invalid',
    name: 'rating-invalid',
    invalid: true,
  }),
);
export const ratingFieldGroupOptional = template(
  correctSvgPath({
    ...demoContentDefault,
    id: 'rating-optional',
    name: 'rating-optional',
    required: false,
  }),
);
export const ratingFieldGroupDisabled = template(
  correctSvgPath({
    ...demoContentSelected,
    id: 'rating-disabled',
    name: 'rating-disabled',
    disabled: true,
  }),
);

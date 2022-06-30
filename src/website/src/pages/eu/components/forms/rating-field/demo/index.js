import demoContentDefault from '@ecl/specs-component-rating-field/demo/data';
import template from '@ecl/twig-component-rating-field/rating-field.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const ratingFieldGroupDefault = template(
  correctSvgPath(demoContentDefault)
);
export const ratingFieldGroupInvalid = template(
  correctSvgPath({
    ...demoContentDefault,
    invalid: true,
  })
);
export const ratingFieldGroupOptional = template(
  correctSvgPath({
    ...demoContentDefault,
    required: false,
  })
);

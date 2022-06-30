import demoContentDefault from '@ecl/specs-component-five-stars/demo/data';
import template from '@ecl/twig-component-five-stars/five-stars.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const fiveStarsGroupDefault = template(
  correctSvgPath(demoContentDefault)
);
export const fiveStarsGroupInvalid = template(
  correctSvgPath({
    ...demoContentDefault,
    invalid: true,
  })
);
export const fiveStarsGroupOptional = template(
  correctSvgPath({
    ...demoContentDefault,
    required: false,
  })
);

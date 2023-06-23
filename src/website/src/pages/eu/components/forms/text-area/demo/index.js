import demoContentDefault from '@ecl/specs-component-text-area/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const textAreaDefault = template(correctSvgPath(demoContentDefault));
export const textAreaDisabled = template(
  correctSvgPath({
    ...demoContentDefault,
    disabled: true,
  })
);
export const textAreaInvalid = template(
  correctSvgPath({
    ...demoContentDefault,
    invalid: true,
  })
);
export const textAreaRequired = template(
  correctSvgPath({
    ...demoContentDefault,
    required: true,
  })
);

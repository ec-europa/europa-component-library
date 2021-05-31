import demoContentDefault from '@ecl/specs-component-checkbox/demo/data--eu';
import template from '@ecl/twig-component-checkbox/checkbox-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const checkboxDefault = template(correctSvgPath(demoContentDefault));
export const checkboxInvalid = template(
  correctSvgPath({ ...demoContentDefault, invalid: true })
);
export const checkboxOptional = template(
  correctSvgPath({ ...demoContentDefault, required: false })
);

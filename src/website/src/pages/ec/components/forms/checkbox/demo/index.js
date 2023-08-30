import demoContentDefault from '@ecl/specs-component-checkbox/demo/data';
import template from '@ecl/twig-component-form-group/form-group.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const checkboxDefault = template(correctSvgPath(demoContentDefault));
export const checkboxInvalid = template(
  correctSvgPath({ ...demoContentDefault, invalid: true }),
);
export const checkboxOptional = template(
  correctSvgPath({
    ...demoContentDefault,
    required: false,
    input: { ...demoContentDefault.input, required: false },
  }),
);
export const checkboxSingle = template(
  correctSvgPath({
    ...demoContentDefault,
    input: {
      ...demoContentDefault.input,
      items: [demoContentDefault.input.items[0]],
    },
    required: true,
    show_helper: false,
    show_label: false,
    required_text: '',
  }),
);

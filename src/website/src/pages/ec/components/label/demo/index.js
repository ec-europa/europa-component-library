import demoDefault from '@ecl/specs-component-label/demo/data';
import template from '@ecl/twig-component-label/label.html.twig';

export const labelLow = template({ ...demoDefault, variant: 'low' });
export const labelMedium = template({ ...demoDefault, variant: 'medium' });
export const labelHigh = template({ ...demoDefault, variant: 'high' });
export const labelHighlight = template({
  ...demoDefault,
  variant: 'highlight',
});

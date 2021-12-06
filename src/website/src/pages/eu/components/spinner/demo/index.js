import dataDefault from '@ecl/specs-component-spinner/demo/data';
import template from '@ecl/twig-component-spinner/spinner.html.twig';

const story = template(dataDefault);

const storyNegative = template({
  ...dataDefault,
  variant: 'negative',
});

const markup = `<div style="position: relative; height: 200px;">${story}</div>`;
const negativeMarkup = `<div class="ecl-u-bg-blue" style="position: relative; height: 200px">${storyNegative}</div>`;

export const spinnerDefault = markup;
export const spinnerNegative = negativeMarkup;

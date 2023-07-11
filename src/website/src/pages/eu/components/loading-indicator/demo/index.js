import dataDefault from '@ecl/specs-component-spinner/demo/data';
import template from '@ecl/twig-component-spinner/spinner.html.twig';

const story = template(dataDefault);

const storyNegative = template({
  ...dataDefault,
  variant: 'negative',
});

const markup = story.then(
  (resolvedMarkup) =>
    `<div style="position: relative; height: 200px;">${resolvedMarkup}</div>`,
);

const negativeMarkup = storyNegative.then(
  (resolvedMarkup) =>
    `<div class="ecl-u-bg-dark" style="position: relative; height: 200px">${resolvedMarkup}</div>`,
);

export const spinnerDefault = markup;
export const spinnerNegative = negativeMarkup;

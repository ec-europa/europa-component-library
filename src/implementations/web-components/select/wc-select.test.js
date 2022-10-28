import path from 'path';
import { renderWebComponent } from '@ecl/test-utils';

import data from '@ecl/specs-component-select/demo/data-single';
import dataMultiple from '@ecl/specs-component-select/demo/data-multiple';

const file = path.resolve(__dirname, 'src/scripts/ecl-select.js');

describe('Select', () => {
  const render = (html) => renderWebComponent('ecl-select', file, html);

  test('EC renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-select
        required
        data-icon-path="/icons.svg"
        data-label="${data.label}"
        data-helper-text="${data.helper_text}"
        data-required-text="${data.required_text}"
        data-optional-text="${data.optional_text}"
      >
      </ecl-select>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('EU renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-select 
        data-system="eu"
        required
        data-icon-path="/icons.svg"
        data-label="${data.label}"
        data-helper-text="${data.helper_text}"
        data-required-text="${data.required_text}"
        data-optional-text="${data.optional_text}"
      >
      </ecl-select>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('multiple renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-select 
        required
        data-icon-path="/icons.svg"
        data-label="${dataMultiple.label}"
        data-helper-text="${dataMultiple.helper_text}"
        data-required-text="${dataMultiple.required_text}"
        data-optional-text="${dataMultiple.optional_text}"
        data-ecl-auto-init
        data-ecl-select-multiple
        data-ecl-select-all="${dataMultiple.multiple_all_text}"
        data-ecl-multiple-placeholder="${dataMultiple.multiple_placeholder}"
        data-ecl-select-close="${dataMultiple.multiple_close_text}"
        data-ecl-select-no-results="${dataMultiple.multiple_search_no_results_text}"
        data-ecl-select-search="${dataMultiple.multiple_search_text}"
        data-ecl-select-clear-all="${dataMultiple.multiple_clear_all_text}"
        data-ecl-script
      >
      </ecl-select>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });
});

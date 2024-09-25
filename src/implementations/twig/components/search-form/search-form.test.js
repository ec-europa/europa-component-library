import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'vitest-axe';

import data from '@ecl/specs-component-search-form/demo/data--ec';

expect.extend(toHaveNoViolations);

describe('Search Form', () => {
  const template = '@ecl/search-form/search-form.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra classes on the input', () => {
      expect.assertions(1);

      const withInputExtraClasses = JSON.parse(JSON.stringify(data));
      withInputExtraClasses.text_input.extra_classes = 'input-extra-class';

      return expect(render(withInputExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra classes on the button', () => {
      expect.assertions(1);

      const withButtonExtraClasses = JSON.parse(JSON.stringify(data));
      withButtonExtraClasses.button.extra_classes = 'button-extra-class';

      return expect(render(withButtonExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra form elements', () => {
      expect.assertions(1);

      const withExtraFormElements = merge(data, {
        extra_form_elements:
          '<input type="hidden" id="custId" name="custId" value="1">',
      });

      return expect(render(withExtraFormElements)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data)),
      ).toHaveNoViolations();
    });
  });
});

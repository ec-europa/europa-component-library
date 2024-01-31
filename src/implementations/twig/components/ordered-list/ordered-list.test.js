import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data--text';
import dataOrderedListNoMarker from '@ecl/specs-component-ordered-list/demo/data--unstyled';
import dataOrderedListDivider from '@ecl/specs-component-ordered-list/demo/data--with-divider';

expect.extend(toHaveNoViolations);

describe('Ordered list', () => {
  const template = '@ecl/ordered-list/ordered-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataOrderedList)).resolves.toMatchSnapshot();
    });

    test('renders correctly with no-marker variant', () => {
      expect.assertions(1);

      return expect(render(dataOrderedListNoMarker)).resolves.toMatchSnapshot();
    });

    test('renders correctly with divider variant', () => {
      expect.assertions(1);

      return expect(render(dataOrderedListDivider)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataOrderedList, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataOrderedList, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataOrderedList, true)),
      ).toHaveNoViolations();
    });
  });
});

import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

expect.extend(toHaveNoViolations);

describe('Description list', () => {
  const template = '@ecl/description-list/description-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataDescriptionListDefault)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly in the horizontal variant', () => {
      expect.assertions(1);

      const horizontal = merge(dataDescriptionListHorizontal, {
        variant: 'horizontal',
      });

      return expect(render(horizontal)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDescriptionListDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDescriptionListDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          renderTwigFileAsHtml(template, dataDescriptionListDefault, true)
        )
      ).toHaveNoViolations();
    });
  });
});

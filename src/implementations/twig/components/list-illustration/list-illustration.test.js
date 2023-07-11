import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataListIllustrationImage from '@ecl/specs-component-list-illustration/demo/data--image';
import dataListIllustrationIcon from '@ecl/specs-component-list-illustration/demo/data--icon';

expect.extend(toHaveNoViolations);

describe('List with illustration', () => {
  const template = '@ecl/list-illustration/list-illustration.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('With image', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationImage),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataListIllustrationImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataListIllustrationImage, {
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
          await renderTwigFileAsHtml(template, dataListIllustrationImage, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('With icon', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationIcon),
      ).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, dataListIllustrationIcon, true),
        ),
      ).toHaveNoViolations();
    });
  });
});

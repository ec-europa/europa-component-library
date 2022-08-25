import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from '@ecl/specs-component-social-media-follow/demo/data';

expect.extend(toHaveNoViolations);

describe('Social Media Follow', () => {
  const template = '@ecl/social-media-follow/social-media-follow.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  describe('Default', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, demoData, true))
      ).toHaveNoViolations();
    });
  });

  describe('Horizontal', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });

  describe('Vertical', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          ...demoData,
          variant: 'vertical',
        })
      ).resolves.toMatchSnapshot();
    });
  });
});

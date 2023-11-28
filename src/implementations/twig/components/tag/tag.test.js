import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataLink from '@ecl/specs-component-tag/demo/data--link';
import dataRemovable from '@ecl/specs-component-tag/demo/data--removable';
import dataSet from '@ecl/specs-component-tag/demo/data--set';

expect.extend(toHaveNoViolations);

describe('Tag', () => {
  const template = '@ecl/tag/tag.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Link', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataLink)).resolves.toMatchSnapshot();
    });

    test('renders correctly with an external link', () => {
      expect.assertions(1);

      const withExternal = { ...dataLink.tag, external: true };
      const optionsWithExternal = {
        ...dataLink,
        default_icon_path: '/icons.svg',
        tag: withExternal,
      };

      return expect(render(optionsWithExternal)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLink, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLink, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataLink, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Removable', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataRemovable)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataRemovable, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Set', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataSet)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSet, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSet, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataSet, true)),
      ).toHaveNoViolations();
    });
  });
});

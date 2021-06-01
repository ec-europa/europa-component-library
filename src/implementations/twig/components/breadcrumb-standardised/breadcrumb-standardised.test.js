/**
 * @jest-environment jsdom
 */

import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import dataSimple from '@ecl/specs-component-breadcrumb/demo/data-simple--ec';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data--ec';

describe('Breadcrumb Standardised', () => {
  const template =
    '@ecl/breadcrumb-standardised/breadcrumb-standardised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    const data = merge(dataSimple, {
      ellipsis_label: 'Click to expand',
    });

    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('Long', () => {
    const data = merge(dataLong, {
      extra_attributes: [
        { name: 'data-ecl-auto-init', value: 'BreadcrumbStandardised' },
      ],
      ellipsis_label: 'Click to expand',
    });

    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});

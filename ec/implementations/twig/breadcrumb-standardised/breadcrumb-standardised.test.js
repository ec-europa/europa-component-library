import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataSimple from './demo/data--simple';
import dataLong from './demo/data';
import dataSimpleEu from './demo/eu-data--simple';
import dataLongEu from './demo/eu-data';

describe('EC - Breadcrumb Standardised', () => {
  const template =
    '@ecl-twig/ec-component-breadcrumb-standardised/ecl-breadcrumb-standardised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    const data = merge(dataSimple, {
      ellipsis_label: 'Click to expand',
    });

    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test(`renders correctly with EU content`, () => {
      expect.assertions(1);

      return expect(render(dataSimpleEu)).resolves.toMatchSnapshot();
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

    test(`renders correctly with EU content`, () => {
      expect.assertions(1);

      return expect(render(dataLongEu)).resolves.toMatchSnapshot();
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
  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = {
        ...dataLong,
        icon_file_path: '',
        _compliance_: true,
      };

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

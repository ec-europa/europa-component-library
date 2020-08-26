import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataSimple from './demo/data--simple';
import dataLong from './demo/data';
import dataSimpleEu from './demo/eu-data--simple';
import dataLongEu from './demo/eu-data';

describe('EC - Breadcrumb', () => {
  const template = '@ecl-twig/ec-component-breadcrumb/ecl-breadcrumb.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(dataSimple)).resolves.toMatchSnapshot();
    });

    test(`renders correctly with EU content`, () => {
      expect.assertions(1);

      return expect(render(dataSimpleEu)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSimple, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSimple, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('Long', () => {
    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(dataLong)).resolves.toMatchSnapshot();
    });

    test(`renders correctly with EU content`, () => {
      expect.assertions(1);

      return expect(render(dataLongEu)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLong, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLong, {
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

import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataLink from './demo/data--link';
import dataButton from './demo/data--button';
import dataRemovable from './demo/data--removable';

describe('EC - Tag', () => {
  const template = '@ecl-twig/ec-component-tag/ecl-tag.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Link', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataLink)).resolves.toMatchSnapshot();
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

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataLink, _compliance_: true };
      dataCompliance.tag.path = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Button', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataButton)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataButton, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataButton, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataButton, _compliance_: true };
      dataCompliance.tag.label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Removable', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataRemovable)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataRemovable, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataRemovable, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataRemovable, _compliance_: true };
      dataCompliance.tag.aria_label = '';
      dataCompliance.default_icon_path = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

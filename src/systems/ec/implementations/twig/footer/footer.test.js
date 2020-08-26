import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataCustom from './demo/data--custom';
import dataCorporate from './demo/data--corporate';

describe('EC - Footer', () => {
  const template = '@ecl-twig/ec-component-footer/ecl-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Corporate', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataCorporate)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCorporate, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCorporate, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages.', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataCorporate, _compliance_: true };
      dataCompliance.common[2].link.path = '';
      dataCompliance.sections[1].links[1].link.path = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Custom', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataCustom)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCustom, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCustom, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages.', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataCustom, _compliance_: true };
      dataCompliance.identity.follow.label = '';
      dataCompliance.identity.title = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

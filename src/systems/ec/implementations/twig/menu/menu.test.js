import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import enData from './demo/data--en';
import frData from './demo/data--fr';

describe('EC - Menu', () => {
  const template = '@ecl-twig/ec-component-menu/ecl-menu.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(enData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(enData, {
        extra_classes: 'custom-button custom-button--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(enData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled shows the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...enData, _compliance_: true };
      dataCompliance.items[3].label = '';
      dataCompliance.close = '';
      dataCompliance.title = '';
      dataCompliance.items[1].children[1].label = '';
      dataCompliance.back = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Translated', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(frData)).resolves.toMatchSnapshot();
    });
  });
});

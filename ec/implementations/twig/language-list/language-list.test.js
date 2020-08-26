import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataSplash from './demo/data--splash';
import dataOverlay from './demo/data--overlay';

describe('EC - Language List', () => {
  describe('Splash', () => {
    const template =
      '@ecl-twig/ec-component-language-list/ecl-language-list.html.twig';
    const render = (params) => renderTwigFileAsNode(template, params);

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataSplash)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataSplash, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataSplash, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataSplash, _compliance_: true };
      dataCompliance.logo.path = '';
      dataCompliance.logo.alt = 'European Commission logo';
      dataCompliance.items[0].label = '';
      dataCompliance.items[2].href = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Overlay', () => {
    const template =
      '@ecl-twig/ec-component-language-list/ecl-language-list.html.twig';
    const render = (params) => renderTwigFileAsNode(template, params);

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataOverlay)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataOverlay, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataOverlay, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataOverlay, _compliance_: true };
      dataCompliance.items[0].label = '';
      dataCompliance.items[7].active = false;
      dataCompliance.items[2].lang = '';
      dataCompliance.close_label = '';
      dataCompliance.title = '';
      dataCompliance.non_eu_category = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

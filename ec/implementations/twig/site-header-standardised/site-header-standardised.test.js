import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import englishData from './demo/data--en';
import frenchData from './demo/data--fr';

describe('EC - Site Header Standardised', () => {
  const template =
    '@ecl-twig/ec-component-site-header-standardised/ecl-site-header-standardised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(englishData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(englishData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly when logged in', () => {
      expect.assertions(1);

      const loggedIn = merge(englishData, { logged: true });

      return expect(render(loggedIn)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(englishData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...englishData, _compliance_: true };
      dataCompliance.banner_top = '';
      dataCompliance.search_form.button.label = '';
      dataCompliance.search_toggle.label = '';
      dataCompliance.login_toggle.label_not_logged = '';
      dataCompliance.logo.alt = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Translated', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(frenchData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(frenchData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(frenchData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});

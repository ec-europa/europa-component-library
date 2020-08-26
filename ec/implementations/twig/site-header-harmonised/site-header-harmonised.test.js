import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';

describe('EC - Site Header Harmonised', () => {
  const template =
    '@ecl-twig/ec-component-site-header-harmonised/ecl-site-header-harmonised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Group 1', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataGroup1)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup1, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly when logged in', () => {
      expect.assertions(1);

      const loggedIn = { ...dataGroup1, logged: true };

      return expect(render(loggedIn)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup1, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup1, _compliance_: true };
      dataCompliance.icon_file_path = '';
      dataCompliance.banner_top = '';
      dataCompliance.logo.alt = '';
      dataCompliance.language_selector.code = '';
      dataCompliance.search_form.button.label = '';
      dataCompliance.login_toggle.label_not_logged = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Group 2', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataGroup2)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup2, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup2, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup2, _compliance_: true };
      dataCompliance.logo.src_desktop = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Group 3', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataGroup3)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup3, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup3, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup3, _compliance_: true };
      dataCompliance.site_name = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

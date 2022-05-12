import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import dataGroup1 from '@ecl/specs-component-site-header-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-site-header-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-site-header-harmonised/demo/data--group3';

describe('Site Header Harmonised', () => {
  const template =
    '@ecl/site-header-harmonised/site-header-harmonised.html.twig';
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
  });
});

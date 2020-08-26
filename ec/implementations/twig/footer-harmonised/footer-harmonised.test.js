import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';
import dataEu from './demo/eu-data';

describe('EC - Footer Harmonised', () => {
  const template =
    '@ecl-twig/ec-component-footer-harmonised/ecl-footer-harmonised.html.twig';
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

    test('with missing input data and debug enabled it renders the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup1, _compliance_: true };
      dataCompliance.sections[0].title.link.label = '';
      dataCompliance.sections[0].description = '';
      dataCompliance.sections[6].links = [];
      dataCompliance.sections[4].title.link.label = '';

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

    test('with missing input data and debug enabled it renders the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup2, _compliance_: true };
      dataCompliance.sections[0].title.link.label = '';
      dataCompliance.sections[0].description = '';

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

    test('with missing input data and debug enabled it renders the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataGroup3, _compliance_: true };
      dataCompliance.sections[1].logos = '';
      dataCompliance.sections[0].title.link.label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('EU version', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataEu)).resolves.toMatchSnapshot();
    });
  });
});

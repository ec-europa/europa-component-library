import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import sections from './demo/data';
import euSections from './demo/eu-data';

describe('EC - Footer Core', () => {
  const template =
    '@ecl-twig/ec-component-footer-core/ecl-footer-core.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = sections;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly in EU', () => {
      expect.assertions(1);

      return expect(render(euSections)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...options, _compliance_: true };
      dataCompliance.sections[0].description = '';
      dataCompliance.sections[0].title.link.label = '';
      dataCompliance.sections[1].links = [];
      dataCompliance.sections[2].links = [];
      dataCompliance.sections[3].links = [];

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

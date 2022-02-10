import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import dataCoreEC from '@ecl/specs-component-site-footer/demo/data-core--ec';
import dataStandardisedEC from '@ecl/specs-component-site-footer/demo/data-standardised--ec';
import dataHarmonisedEC from '@ecl/specs-component-site-footer/demo/data-harmonised-group1--ec';
import dataCoreEU from '@ecl/specs-component-site-footer/demo/data-core--eu';

describe('Site Footer Core EC', () => {
  const template = '@ecl/site-footer/site-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = dataCoreEC;

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
  });
});

describe('Site Footer Standardised EC', () => {
  const template = '@ecl/site-footer/site-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = dataStandardisedEC;

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
  });
});

describe('Site Footer Harmonised EC', () => {
  const template = '@ecl/site-footer/site-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = dataHarmonisedEC;

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
  });
});

describe('Site Footer Core EU', () => {
  const template = '@ecl/site-footer/site-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = dataCoreEU;

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
  });
});

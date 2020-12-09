import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import sectionsEc from '@ecl/specs-component-footer-core/demo/data--ec';
import sectionsEu from '@ecl/specs-component-footer-core/demo/data--eu';

describe('Footer Core EC', () => {
  const template = '@ecl/footer-core/footer-core.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = sectionsEc;

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

describe('Footer Core EU', () => {
  const template = '@ecl/footer-core/footer-core.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = sectionsEu;

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

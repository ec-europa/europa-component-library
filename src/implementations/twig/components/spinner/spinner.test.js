import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import dataDefault from '@ecl/specs-component-spinner/demo/data';

describe('Spinner', () => {
  const template = '@ecl/spinner/spinner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('ECL Spinner', () => {
    test('primary renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('negative renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataDefault, variant: 'negative' })
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-table--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});

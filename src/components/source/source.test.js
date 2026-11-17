import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from './demo/data';

expect.extend(toHaveNoViolations);

describe('Source', () => {
  const template = '@ecl/source/source.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a single source', () => {
      expect.assertions(1);

      const singleData = { ...data, sources: data.sources.slice(0, 1) };

      return expect(render(singleData)).resolves.toMatchSnapshot();
    });

    test('renders correctly without label', () => {
      expect.assertions(1);

      const noLabelData = { ...data, label: '' };

      return expect(render(noLabelData)).resolves.toMatchSnapshot();
    });

    test('renders correctly inverted and branded', () => {
      expect.assertions(1);

      const variantData = { ...data, inverted: true, branded: true };

      return expect(render(variantData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = {
        ...data,
        extra_classes: 'custom-class custom-class--test',
      };

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = {
        ...data,
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      };

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders nothing without sources', () => {
      expect.assertions(1);

      return expect(
        render({ label: 'Sources:', sources: [] }).then((n) => n.innerHTML),
      ).resolves.toBe('');
    });
  });

  test('passes the accessibility tests', async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, data, true)),
    ).toHaveNoViolations();
  });
});

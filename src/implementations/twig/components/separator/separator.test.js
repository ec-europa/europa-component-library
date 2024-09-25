import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'vitest-axe';

expect.extend(toHaveNoViolations);

describe('Separator', () => {
  const template = '@ecl/separator/separator.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render()).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = {
        extra_classes: 'custom-class custom-class--test',
      };

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      };

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, {}, true)),
      ).toHaveNoViolations();
    });
  });
});

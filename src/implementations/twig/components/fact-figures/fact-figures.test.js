import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import demoContent from '@ecl/specs-component-fact-figures/demo/data';

const demo1Col = { ...demoContent, column: 1 };
demo1Col.items = demo1Col.items.slice(0, 1);
const demo2Col = { ...demoContent, column: 2 };
demo2Col.items = demo2Col.items.slice(0, 2);
const demo3Col = { ...demoContent, column: 3 };
demo3Col.items = demo3Col.items.slice(0, 6);
const demo4Col = { ...demoContent, column: 4 };

expect.extend(toHaveNoViolations);

describe('Fact and figures', () => {
  const template = '@ecl/fact-figures/fact-figures.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('1 col', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demo1Col)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demo1Col, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demo1Col, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, demo1Col, true)),
      ).toHaveNoViolations();
    });
  });

  describe('2 cols', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demo2Col)).resolves.toMatchSnapshot();
    });
  });

  describe('3 cols', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demo3Col)).resolves.toMatchSnapshot();
    });
  });

  describe('4 cols', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demo4Col)).resolves.toMatchSnapshot();
    });
  });
});

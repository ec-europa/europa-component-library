import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import demoData from '@ecl/specs-component-gallery/demo/data';

expect.extend(toHaveNoViolations);

describe('Gallery', () => {
  const template = '@ecl/gallery/gallery.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
    jest.setTimeout(15000);
    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, demoData, true)),
      ).toHaveNoViolations();
    });

    test('renders correctly with deprecated data', () => {
      expect.assertions(1);

      const oldData = { ...demoData };
      oldData.items[0].path = oldData.items[0].picture.img.src;
      oldData.items[0].alt = oldData.items[0].picture.img.alt;
      oldData.items[0].picture = {};
      oldData.items[2].image = { ...oldData.items[2].picture.img };
      oldData.items[2].picture = {};

      return expect(render(oldData)).resolves.toMatchSnapshot();
    });
  });
});

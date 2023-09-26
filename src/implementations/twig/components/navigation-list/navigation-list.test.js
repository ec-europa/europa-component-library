import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDefault from '@ecl/specs-component-navigation-list/demo/data';

expect.extend(toHaveNoViolations);

describe('Navigation list', () => {
  const template = '@ecl/navigation-list/navigation-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly without borders', () => {
      const dataNoBorder = JSON.parse(JSON.stringify(dataDefault));
      dataNoBorder.items.forEach((item) => {
        item.border = false;
      });

      expect.assertions(1);
      return expect(render(dataNoBorder)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
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

    test('renders correctly with deprecated data', () => {
      expect.assertions(1);

      const oldData = { ...dataDefault };
      oldData.items[0].picture = {};
      oldData.items[0].image = {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        alt: 'Alternative text',
      };

      return expect(render(oldData)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataDefault, true)),
      ).toHaveNoViolations();
    });
  });
});

import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from '@ecl/specs-component-picture/demo/data';

expect.extend(toHaveNoViolations);

describe('Picture', () => {
  const template = '@ecl/picture/picture.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with zoom', () => {
      expect.assertions(1);

      const dataZoom = JSON.parse(JSON.stringify(data));
      dataZoom.zoom = true;

      return expect(render(dataZoom)).resolves.toMatchSnapshot();
    });

    test('renders correctly with empty alt attribute', () => {
      expect.assertions(1);

      const dataEmptyAlt = JSON.parse(JSON.stringify(data));
      dataEmptyAlt.picture.img.alt = '';

      return expect(render(dataEmptyAlt)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--picture',
        extra_image_classes: 'custom-class custom-class--image',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });
});

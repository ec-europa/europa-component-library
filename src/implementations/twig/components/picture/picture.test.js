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

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        picture_class: 'custom-class custom-class--picture',
        image_class: 'custom-class custom-class--image',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, data, true))
      ).toHaveNoViolations();
    });
  });
});

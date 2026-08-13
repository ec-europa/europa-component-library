import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from './demo/data';

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

    test('adds an empty alt attribute when img.alt is empty', async () => {
      expect.assertions(1);

      const dataEmptyAlt = JSON.parse(JSON.stringify(data));
      dataEmptyAlt.picture.img.alt = '';

      const html = await render(dataEmptyAlt);
      const img = html.querySelector('picture.ecl-picture img');

      expect(img.hasAttribute('alt')).toBe(true);
    });

    test('Adds the needed attributes when img.picture_anchor is set and debug_position is true', async () => {
      const dataAnchor = JSON.parse(JSON.stringify(data));
      dataAnchor.picture.image_anchor = '30% 60%';
      dataAnchor.picture.debug_position = true;

      const html = await render(dataAnchor);
      const picture = html.querySelector('picture.ecl-picture');
      const img = html.querySelector('picture img');

      expect(img.hasAttribute('data-image-focal-pending')).toBe(true);
      expect(getComputedStyle(img).getPropertyValue('--ecl-image-anchor')).toBe(
        '30% 60%',
      );
      expect(picture.getAttribute('data-ecl-auto-init')).toBe('Picture');
      expect(picture.hasAttribute('data-picture-debug')).toBe(true);

      return expect(render(dataAnchor)).resolves.toMatchSnapshot();
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

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });
});

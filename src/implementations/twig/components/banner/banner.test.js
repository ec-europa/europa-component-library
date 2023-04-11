import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import bannerDataPlainBackground from '@ecl/specs-component-banner/demo/data--plain-background';
import bannerDataTextBox from '@ecl/specs-component-banner/demo/data--text-box';
import bannerDataImageOverlay from '@ecl/specs-component-banner/demo/data--image-overlay';
import bannerDataTextHighlight from '@ecl/specs-component-banner/demo/data--text-highlight';

expect.extend(toHaveNoViolations);

describe('Banner', () => {
  const template = '@ecl/banner/banner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Plain background', () => {
    const data = bannerDataPlainBackground;

    test(`renders correctly`, () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
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
        await axe(renderTwigFileAsHtml(template, data, true))
      ).toHaveNoViolations();
    });
  });

  describe('image', () => {
    test(`- text-box renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataTextBox)).resolves.toMatchSnapshot();
    });

    test(`- text highlight renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataTextHighlight)).resolves.toMatchSnapshot();
    });

    test(`- image overlay renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImageOverlay)).resolves.toMatchSnapshot();
    });

    test(`- renders correctly with old data`, () => {
      expect.assertions(1);
      const oldData = {
        ...bannerDataTextBox,
        image:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        picture: {},
      };

      return expect(render(oldData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(bannerDataTextBox, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(bannerDataTextBox, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, bannerDataTextBox, true))
      ).toHaveNoViolations();
    });
  });
});

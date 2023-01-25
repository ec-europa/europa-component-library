import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import bannerDataPrimary from '@ecl/specs-component-banner/demo/data--primary';
import bannerDataImage from '@ecl/specs-component-banner/demo/data--image-box';
import bannerDataImageShade from '@ecl/specs-component-banner/demo/data--image-shade';
import bannerDataImageGradient from '@ecl/specs-component-banner/demo/data--image-gradient';

expect.extend(toHaveNoViolations);

describe('Banner', () => {
  const template = '@ecl/banner/banner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Primary', () => {
    const data = bannerDataPrimary;

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

      return expect(render(bannerDataImage)).resolves.toMatchSnapshot();
    });

    test(`- gradient renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImageGradient)).resolves.toMatchSnapshot();
    });

    test(`- shade renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImageShade)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(bannerDataImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(bannerDataImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, bannerDataImage, true))
      ).toHaveNoViolations();
    });
  });
});

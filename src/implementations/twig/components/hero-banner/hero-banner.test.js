import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import bannerDataImage from '@ecl/specs-component-hero-banner/demo/data--image-box';
import bannerDataImageGradient from '@ecl/specs-component-hero-banner/demo/data--image-gradient';
import bannerDataImageShade from '@ecl/specs-component-hero-banner/demo/data--image-shade';
import bannerDataSimplePrimary from '@ecl/specs-component-hero-banner/demo/data--simple-primary';
import bannerDataSimpleGrey from '@ecl/specs-component-hero-banner/demo/data--simple-grey';
import bannerDataSimpleWhite from '@ecl/specs-component-hero-banner/demo/data--simple-white';

describe('Hero Banner', () => {
  const template = '@ecl/hero-banner/hero-banner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    test(`- primary renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimplePrimary)).resolves.toMatchSnapshot();
    });

    test(`- grey renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimpleGrey)).resolves.toMatchSnapshot();
    });

    test(`- white renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimpleWhite)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(bannerDataSimplePrimary, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(bannerDataSimplePrimary, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
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
  });
});

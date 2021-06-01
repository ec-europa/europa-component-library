import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import bannerDataSimplePrimary from '@ecl/specs-component-page-banner/demo/data--simple-primary';
import bannerDataSimpleSecondary from '@ecl/specs-component-page-banner/demo/data--simple-secondary';
import bannerDataSimpleWhite from '@ecl/specs-component-page-banner/demo/data--simple-white';
import bannerDataImage from '@ecl/specs-component-page-banner/demo/data--image-box';
import bannerDataImageShade from '@ecl/specs-component-page-banner/demo/data--image-shade';
import bannerDataImageGradient from '@ecl/specs-component-page-banner/demo/data--image-gradient';

describe('Page Banner', () => {
  const template = '@ecl/page-banner/page-banner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    const data = bannerDataSimplePrimary;

    test(`- primary renders correctly`, () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test(`- secondary renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(bannerDataSimpleSecondary)
      ).resolves.toMatchSnapshot();
    });

    test(`- white renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimpleWhite)).resolves.toMatchSnapshot();
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

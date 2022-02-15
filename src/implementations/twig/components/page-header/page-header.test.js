import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoDefault from '@ecl/specs-component-page-header/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header/demo/data--background-image';
import dataBreadcrumbSimple from '@ecl/specs-component-breadcrumb/demo/data--ec';

demoDefault.variant = 'standradised';
demoDefault.breadcrumb = dataBreadcrumbSimple;
demoBackgroundImage.breadcrumb = dataBreadcrumbSimple;

describe('Page Header Standardised', () => {
  const template = '@ecl/page-header/page-header.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Background image', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoBackgroundImage)).resolves.toMatchSnapshot();
    });
  });
});

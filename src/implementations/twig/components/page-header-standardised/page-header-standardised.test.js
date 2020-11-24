import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/specs-component-page-header-standardised/demo/data--meta-title-description';
import dataBreadcrumbSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';

demoTitleContent.breadcrumb = dataBreadcrumbSimple;
demoMetaTitleContent.breadcrumb = dataBreadcrumbSimple;
demoMetaTitleDescriptionContent.breadcrumb = dataBreadcrumbSimple;

describe('Page Header Standardised', () => {
  const template =
    '@ecl/page-header-standardised/page-header-standardised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoTitleContent)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoTitleContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoTitleContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('With missing input data and debug enabled it returns the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...demoTitleContent, _compliance_: true };
      dataCompliance.title = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Meta-title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoMetaTitleContent)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoMetaTitleContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoMetaTitleContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Meta-title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(
        render(demoMetaTitleDescriptionContent)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoMetaTitleDescriptionContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoMetaTitleDescriptionContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});

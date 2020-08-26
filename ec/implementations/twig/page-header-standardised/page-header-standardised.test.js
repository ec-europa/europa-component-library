import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';
import euDemoTitleContent from './demo/eu-data--title';
import euDemoMetaTitleContent from './demo/eu-data--meta-title';
import euDemoMetaTitleDescriptionContent from './demo/eu-data--meta-title-description';

const defaultSprite = '/static/icons.svg';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

describe('Page Header Standardised', () => {
  const template =
    '@ecl-twig/ec-component-page-header-standardised/ecl-page-header-standardised.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('EC - title', () => {
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

    test('EC - with missing input data and debug enabled it returns the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...demoTitleContent, _compliance_: true };
      dataCompliance.title = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('EC - meta-title', () => {
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

  describe('EC - meta-title-description', () => {
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

  describe('EU content', () => {
    test('Title', () => {
      expect.assertions(1);

      return expect(render(euDemoTitleContent)).resolves.toMatchSnapshot();
    });

    test('Meta Title', () => {
      expect.assertions(1);

      return expect(render(euDemoMetaTitleContent)).resolves.toMatchSnapshot();
    });

    test('Meta Title Description', () => {
      expect.assertions(1);

      return expect(
        render(euDemoMetaTitleDescriptionContent)
      ).resolves.toMatchSnapshot();
    });
  });
});

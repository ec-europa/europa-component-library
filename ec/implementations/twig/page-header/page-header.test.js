import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import pageHeaderDataTitle from './demo/data--title';
import pageHeaderDataTitleDescription from './demo/data--title-description';
import pageHeaderDataMetaTitle from './demo/data--meta-title';
import pageHeaderDataMetaTitleDescription from './demo/data--meta-title-description';
import pageHeaderDataEvents from './demo/data--events';
import pageHeaderDataEventsDescription from './demo/data--events-description';
import pageHeaderDataBackgroundImage from './demo/data--background-image';
import pageHeaderDataBrandedEU from './demo/eu-data--branded-homepage';
import pageHeaderDataBasicEU from './demo/eu-data--basic';
import pageHeaderDataEventsEU from './demo/eu-data--events';
import pageHeaderHomepageEU from './demo/eu-data--homepage';

describe('Page Header', () => {
  const template =
    '@ecl-twig/ec-component-page-header/ecl-page-header.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('EU', () => {
    test('branded homepage renders correctly', () => {
      expect.assertions(1);

      return expect(render(pageHeaderDataBrandedEU)).resolves.toMatchSnapshot();
    });

    test('basic renders correctly', () => {
      expect.assertions(1);

      return expect(render(pageHeaderDataBasicEU)).resolves.toMatchSnapshot();
    });

    test('events renders correctly', () => {
      expect.assertions(1);

      return expect(render(pageHeaderDataEventsEU)).resolves.toMatchSnapshot();
    });

    test('homepage renders correctly', () => {
      expect.assertions(1);

      return expect(render(pageHeaderHomepageEU)).resolves.toMatchSnapshot();
    });
  });

  describe('title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      return expect(render(pageHeaderDataTitle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataTitle, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataTitle, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...pageHeaderDataTitle, _compliance_: true };
      dataCompliance.title = '';
      dataCompliance.breadcrumb = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(pageHeaderDataTitleDescription)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataTitleDescription, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataTitleDescription, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(pageHeaderDataMetaTitle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataMetaTitle, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataMetaTitle, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(
        render(pageHeaderDataMetaTitleDescription)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataMetaTitleDescription, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataMetaTitleDescription, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('events', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      return expect(render(pageHeaderDataEvents)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataEvents, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataEvents, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('events-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(
        render(pageHeaderDataEventsDescription)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataEventsDescription, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataEventsDescription, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('background image', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      return expect(
        render(pageHeaderDataBackgroundImage)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(pageHeaderDataBackgroundImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(pageHeaderDataBackgroundImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});

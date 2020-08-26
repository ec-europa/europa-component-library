import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';
import dataThumbnail from './demo/data--thumbnail';

describe('EC - File', () => {
  const template = '@ecl-twig/ec-component-file/ecl-file.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('With translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataWithTranslation, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataWithTranslation, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataWithTranslation, _compliance_: true };
      dataCompliance.translation.items[0].title = '';
      dataCompliance.translation.items[0].download.link.label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Without translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithoutTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataWithoutTranslation, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataWithoutTranslation, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataWithoutTranslation, _compliance_: true };
      dataCompliance.meta = '';
      dataCompliance.language = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Thumbnail', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataThumbnail)).resolves.toMatchSnapshot();
    });
  });
});

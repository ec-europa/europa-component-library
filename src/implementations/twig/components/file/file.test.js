import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

// Import data for tests
import dataWithTranslation from '@ecl/specs-component-file/demo/data--with-translation';
import dataWithoutTranslation from '@ecl/specs-component-file/demo/data--without-translation';
import dataThumbnail from '@ecl/specs-component-file/demo/data--thumbnail';
import dataTaxonomy from '@ecl/specs-component-file/demo/data--taxonomy';

describe('File', () => {
  const template = '@ecl/file/file.html.twig';
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
  });

  describe('Without translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithoutTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a single label', () => {
      expect.assertions(1);

      const singleLabel = {
        ...dataWithoutTranslation,
        label: { label: 'highlight', variant: 'highlight' },
      };
      return expect(render(singleLabel)).resolves.toMatchSnapshot();
    });

    test('renders correctly with multiple labels', () => {
      expect.assertions(1);

      const multipleLabels = {
        ...dataWithoutTranslation,
        label: [
          { label: 'highlight', variant: 'highlight' },
          { label: 'important', variant: 'low' },
        ],
      };
      return expect(render(multipleLabels)).resolves.toMatchSnapshot();
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
  });

  describe('Thumbnail', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataThumbnail)).resolves.toMatchSnapshot();
    });

    test('renders correctly with taxonomies', () => {
      expect.assertions(1);

      return expect(render(dataTaxonomy)).resolves.toMatchSnapshot();
    });

    test('renders correctly without an image', () => {
      expect.assertions(1);

      dataThumbnail.image = {};

      return expect(render(dataThumbnail)).resolves.toMatchSnapshot();
    });
  });
});

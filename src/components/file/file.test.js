import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import data for tests
import dataDemo from './demo/data';

const dataWithTranslation = merge(dataDemo, {
  id: 'ecl-file-with-translation',
});

const dataWithoutTranslation = merge(dataWithTranslation, {
  id: 'ecl-file-without-translation',
});
delete dataWithoutTranslation.translation;

const dataThumbnail = merge(dataWithTranslation, {
  id: 'ecl-file-with-thumbnail',
});

expect.extend(toHaveNoViolations);

describe('File', () => {
  const template = '@ecl/file/file.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('With translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with download attribute', () => {
      expect.assertions(1);

      const withDownload = merge(dataWithTranslation, {
        download_attribute: true,
      });

      return expect(render(withDownload)).resolves.toMatchSnapshot();
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

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, dataWithTranslation, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('Without translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithoutTranslation)).resolves.toMatchSnapshot();
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
  });

  describe('Thumbnail', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataThumbnail)).resolves.toMatchSnapshot();
    });

    test('renders correctly without an image', () => {
      expect.assertions(1);

      const withoutImage = { ...dataThumbnail };
      delete withoutImage.picture;

      return expect(render(withoutImage)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataThumbnail, true)),
      ).toHaveNoViolations();
    });
  });
});

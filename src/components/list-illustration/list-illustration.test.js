import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataListIllustrationImage from './demo/data--image';
import dataListIllustrationIcon from './demo/data--icon';
import dataListIllustrationIconList from './demo/data--icon-list';
import dataListIllustrationNumberList from './demo/data--number-list';

expect.extend(toHaveNoViolations);

describe('List with illustration', () => {
  const template = '@ecl/list-illustration/list-illustration.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('With image', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationImage),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly when centered', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataListIllustrationImage, centered: true }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with squared images', () => {
      expect.assertions(1);

      const dataSquared = JSON.parse(JSON.stringify(dataListIllustrationImage));
      dataSquared.items.forEach((item) => {
        item.square = true;
      });

      return expect(render(dataSquared)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataListIllustrationImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataListIllustrationImage, {
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
          await renderTwigFileAsHtml(template, dataListIllustrationImage, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('With icon', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationIcon),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, dataListIllustrationIcon, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('icon list', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationIconList),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with a divider', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataListIllustrationIconList, divider: true }),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(
            template,
            dataListIllustrationIconList,
            true,
          ),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('number list', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(dataListIllustrationNumberList),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly in two columns', () => {
      expect.assertions(1);

      return expect(
        render({ ...dataListIllustrationNumberList, column: 2 }),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(
            template,
            dataListIllustrationNumberList,
            true,
          ),
        ),
      ).toHaveNoViolations();
    });
  });
});

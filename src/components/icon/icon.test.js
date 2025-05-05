import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from './demo/data';

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  const template = '@ecl/icon/icon.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('WT markup', () => {
    test(`- icon ${demoData.icon.name} renders correctly`, () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('- renders correctly with accessibility content', () => {
      expect.assertions(1);

      const optionsWithAccessibility = merge(demoData, {
        as_image: true,
        extra_accessibility: {
          title: 'Title',
          title_id: 'example-title',
          description: 'Description',
          description_id: 'example-desc',
        },
      });

      return expect(
        render(optionsWithAccessibility),
      ).resolves.toMatchSnapshot();
    });

    test('- renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('- renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('- passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoData)),
      ).toHaveNoViolations();
    });
  });
});

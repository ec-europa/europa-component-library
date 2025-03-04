import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import iconsAll from '@ecl/resources-icons/dist/lists/all.json';
import dataAll from '@ecl/specs-component-icon/demo/data';

const dataIcon = merge(dataAll, {
  icon: {
    name: iconsAll[0],
  },
});

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  const template = '@ecl/icon/icon.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('WT markup', () => {
    test(`- icon ${dataIcon.icon.name} renders correctly`, () => {
      expect.assertions(1);

      return expect(render(dataIcon)).resolves.toMatchSnapshot();
    });

    test('- renders correctly with accessibility content', () => {
      expect.assertions(1);

      const optionsWithAccessibility = merge(dataIcon, {
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

      const optionsWithExtraClasses = merge(dataIcon, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('- renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataIcon, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test(`- passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataIcon)),
      ).toHaveNoViolations();
    });
  });
});

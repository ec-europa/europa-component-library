/**
 * @jest-environment jsdom
 */

import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import iconsAll from '@ecl/resources-ec-icons/dist/lists/all.json';
import dataAll from '@ecl/specs-component-icon/demo/data';

describe('Icon', () => {
  const template = '@ecl/icon/icon.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('All icons', () => {
    iconsAll.forEach((icon) => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(dataAll, {
          icon: {
            name: icon,
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Generic tests - Any icon', () => {
    const options = merge(dataAll, {
      icon: {
        name: iconsAll[0],
      },
    });

    test('renders correctly with accessibility content', () => {
      expect.assertions(1);

      const optionsWithAccessibility = merge(options, {
        as_image: true,
        extra_accessibility: {
          title: 'Title',
          title_id: 'example-title',
          description: 'Description',
          description_id: 'example-desc',
        },
      });

      return expect(
        render(optionsWithAccessibility)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});

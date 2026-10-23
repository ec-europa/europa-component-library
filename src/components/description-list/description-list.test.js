import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDescriptionListDefault from './demo/data--default';
import dataDescriptionListHorizontal from './demo/data--horizontal';

expect.extend(toHaveNoViolations);

const normalizeGeneratedIds = (element) => {
  const generated = element.querySelector('[id^="ecl-popover"]');

  if (generated) {
    const stableId = 'generated-id';

    generated.setAttribute('id', stableId);

    const controller = element.querySelector('[aria-controls^="ecl-popover"]');

    if (controller) {
      controller.setAttribute('aria-controls', stableId);
    }
  }

  return element;
};

describe('Description list', () => {
  const template = '@ecl/description-list/description-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return render(dataDescriptionListDefault).then((element) => {
        normalizeGeneratedIds(element);

        expect(element).toMatchSnapshot();
      });
    });

    test('renders correctly in the horizontal variant', () => {
      expect.assertions(1);

      const horizontal = merge(dataDescriptionListHorizontal, {
        variant: 'horizontal',
      });

      return expect(render(horizontal)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDescriptionListDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return render(withExtraClasses).then((element) => {
        normalizeGeneratedIds(element);

        expect(element).toMatchSnapshot();
      });
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDescriptionListDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return render(withExtraAttributes).then((element) => {
        normalizeGeneratedIds(element);

        expect(element).toMatchSnapshot();
      });
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(
            template,
            dataDescriptionListDefault,
            true,
          ),
        ),
      ).toHaveNoViolations();
    });
  });
});

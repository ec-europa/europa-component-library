import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataCard from './demo/data';

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

describe('Card', () => {
  const template = '@ecl/card/card.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return render(dataCard).then((element) => {
        normalizeGeneratedIds(element);

        expect(element).toMatchSnapshot();
      });
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCard, {
        extra_classes: 'custom-class custom-class--test',
      });

      return render(withExtraClasses).then((element) => {
        normalizeGeneratedIds(element);

        expect(element).toMatchSnapshot();
      });
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCard, {
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
        await axe(await renderTwigFileAsHtml(template, dataCard, true)),
      ).toHaveNoViolations();
    });
  });
});

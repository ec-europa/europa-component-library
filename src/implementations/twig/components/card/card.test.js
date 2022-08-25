import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataCard from '@ecl/specs-component-card/demo/data';
import dataCardBc from '@ecl/specs-component-card/demo/deprecated/data';

expect.extend(toHaveNoViolations);

describe('Card', () => {
  const template = '@ecl/card/card.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataCard)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCard, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCard, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, dataCard, true))
      ).toHaveNoViolations();
    });
  });

  describe('Backward compatibility', () => {
    test('renders correctly with deprecated data', () => {
      expect.assertions(1);
      return expect(render(dataCardBc)).resolves.toMatchSnapshot();
    });
  });
});

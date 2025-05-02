import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from './demo/data';

expect.extend(toHaveNoViolations);

describe('Tabs', () => {
  const template = '@ecl/tabs/tabs.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class name on items', () => {
      expect.assertions(1);

      const withExtraClassesOnItems = {
        items: [
          {
            label: 'Tab label',
            path: '/example',
            extra_classes: 'extra-class-1',
          },
          {
            label: 'Tab label',
            path: '/example',
            extra_classes: 'extra-class-2',
          },
        ],
      };

      return expect(render(withExtraClassesOnItems)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoData, true)),
      ).toHaveNoViolations();
    });
  });
});

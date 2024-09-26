import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'vitest-axe';

import dataEC from '@ecl/specs-component-splash-page/demo/data--ec';
import dataEU from '@ecl/specs-component-splash-page/demo/data--eu';

expect.extend(toHaveNoViolations);

const template = '@ecl/splash-page/splash-page.html.twig';
const render = (params) => renderTwigFileAsNode(template, params);

describe('Splash page', () => {
  describe('EC', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEC)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataEC, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataEC, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataEC, true)),
      ).toHaveNoViolations();
    });
  });

  describe('EU', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEU)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataEU, true)),
      ).toHaveNoViolations();
    });
  });
});

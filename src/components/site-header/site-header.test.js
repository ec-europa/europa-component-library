import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataEC from './demo/data--ec';
import dataEU from './demo/data--eu';

const template = '@ecl/site-header/site-header.html.twig';
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe('Site Header', () => {
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

    test('renders correctly when logged in', () => {
      expect.assertions(1);

      const loggedIn = merge(dataEC, { logged: true });

      return expect(render(loggedIn)).resolves.toMatchSnapshot();
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

    test('renders the search toggle as a link when an href is provided', () => {
      expect.assertions(1);

      const withSearchToggleHref = merge(dataEC, {
        search_toggle: { href: '/example' },
      });

      return expect(render(withSearchToggleHref)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataEC)),
      ).toHaveNoViolations();
    });
  });

  describe('EU', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEU)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataEU)),
      ).toHaveNoViolations();
    });
  });
});

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

    test('renders the login toggle as a button when no href is provided', () => {
      expect.assertions(1);

      const withoutLoginToggleHref = merge(dataEC, {
        login_toggle: { href_not_logged: '' },
      });

      return expect(render(withoutLoginToggleHref)).resolves.toMatchSnapshot();
    });

    test('renders the login toggle as a link when logged in and an href is provided', () => {
      expect.assertions(1);

      const loggedInWithHref = merge(dataEC, {
        logged: true,
        login_toggle: { href_logged: '/example' },
      });

      return expect(render(loggedInWithHref)).resolves.toMatchSnapshot();
    });

    test('renders the language selector as a link when an href is provided', () => {
      expect.assertions(1);

      const withLanguageSelectorHref = merge(dataEC, {
        language_selector: { href: '/example' },
      });

      return expect(
        render(withLanguageSelectorHref),
      ).resolves.toMatchSnapshot();
    });

    test('renders the custom action toggle as a link when a path is provided', () => {
      expect.assertions(1);

      const withCustomActionPath = merge(dataEC, {
        custom_action: { link: { path: '/example' } },
      });

      return expect(render(withCustomActionPath)).resolves.toMatchSnapshot();
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

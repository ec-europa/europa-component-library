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

// Lighter fixture for tests that don't need the full demo data (large menus,
// language lists, notification, etc.), to keep their snapshots small and focused.
const minimalData = {
  site_name: 'Site name',
  login_toggle: {
    label_not_logged: 'Log in',
    label_logged: 'Logged in',
  },
  login_box: {
    id: 'login-box-id',
    description: 'Logged in as "last name" "first name"',
    label: 'Log out',
    href: '/example',
  },
  search_toggle: {
    label: 'Search',
  },
  search_form: {
    label: 'Search',
    text_input: {
      id: 'search-input-id',
      label: 'Search',
    },
  },
  language_selector: {
    label: 'EN',
    aria_label: 'Change language, current language is English',
  },
  custom_action: {
    link: {
      label: 'Custom label',
    },
    icon: {
      name: 'brochure',
    },
  },
};

expect.extend(toHaveNoViolations);

describe('Site Header', () => {
  describe('EC', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataEC)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(minimalData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly when logged in', () => {
      expect.assertions(1);

      const loggedIn = merge(minimalData, { logged: true });

      return expect(render(loggedIn)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a single language item', () => {
      expect.assertions(1);

      const singleLanguageItem = {
        ...dataEC,
        language_selector: {
          ...dataEC.language_selector,
          overlay: {
            ...dataEC.language_selector.overlay,
            items: [dataEC.language_selector.overlay.items[0]],
          },
        },
      };

      return expect(render(singleLanguageItem)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(minimalData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders the search toggle as a link when an href is provided', () => {
      expect.assertions(1);

      const withSearchToggleHref = merge(minimalData, {
        search_toggle: { href: '/example' },
      });

      return expect(render(withSearchToggleHref)).resolves.toMatchSnapshot();
    });

    test('renders the login toggle as a button when no href is provided', () => {
      expect.assertions(1);

      const withoutLoginToggleHref = merge(minimalData, {
        login_toggle: { href_not_logged: '' },
      });

      return expect(render(withoutLoginToggleHref)).resolves.toMatchSnapshot();
    });

    test('renders the login toggle as a link when logged in and an href is provided', () => {
      expect.assertions(1);

      const loggedInWithHref = merge(minimalData, {
        logged: true,
        login_toggle: { href_logged: '/example' },
      });

      return expect(render(loggedInWithHref)).resolves.toMatchSnapshot();
    });

    test('renders the language selector as a link when an href is provided', () => {
      expect.assertions(1);

      const withLanguageSelectorHref = merge(minimalData, {
        language_selector: { href: '/example' },
      });

      return expect(
        render(withLanguageSelectorHref),
      ).resolves.toMatchSnapshot();
    });

    test('renders the custom action toggle as a link when a path is provided', () => {
      expect.assertions(1);

      const withCustomActionPath = merge(minimalData, {
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

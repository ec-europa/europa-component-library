import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataBreadcrumbSimple from '@ecl/breadcrumb/demo/data--simple';
import demoDefault from './demo/data';

expect.extend(toHaveNoViolations);
demoDefault.breadcrumb = dataBreadcrumbSimple;

const demoSimple = { ...demoDefault };
delete demoSimple.picture_background;
delete demoSimple.picture_thumbnail;

describe('Page Header Standardised', () => {
  const template = '@ecl/page-header/page-header.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('- renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoSimple)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoSimple, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoSimple, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly when title is hidden and no meta is provided', () => {
      expect.assertions(1);
      const noMargin = { ...demoSimple, hide_title: true, meta: [] };

      return expect(render(noMargin)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoSimple, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Background image', () => {
    test('- renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoDefault)).resolves.toMatchSnapshot();
    });
  });

  describe('With simple header', () => {
    test('- renders correctly', () => {
      expect.assertions(1);
      return expect(
        render({
          ...demoDefault,
          expandable: { ...demoDefault.expandable, lists: [] },
        }),
      ).resolves.toMatchSnapshot();
    });
  });
});

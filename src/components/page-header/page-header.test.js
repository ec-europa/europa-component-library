import { describe, expect, test } from 'vitest';
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

describe('Page Header', () => {
  const template = '@ecl/page-header/page-header.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with hidden title and no meta', () => {
      expect.assertions(1);
      const noTitle = JSON.parse(JSON.stringify(demoDefault));
      noTitle.hide_title = true;
      noTitle.meta = [];

      return expect(render(noTitle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with description bottom', () => {
      expect.assertions(1);
      const descriptionBottom = JSON.parse(JSON.stringify(demoDefault));
      descriptionBottom.description_position = 'bottom';

      return expect(render(descriptionBottom)).resolves.toMatchSnapshot();
    });

    test('renders correctly with picture bottom', () => {
      expect.assertions(1);
      const pictureBottom = JSON.parse(JSON.stringify(demoDefault));
      pictureBottom.picture_position = 'bottom';

      return expect(render(pictureBottom)).resolves.toMatchSnapshot();
    });

    test('renders correctly with picture beside', () => {
      expect.assertions(1);
      const pictureBeside = JSON.parse(JSON.stringify(demoDefault));
      pictureBeside.picture_position = 'beside';

      return expect(render(pictureBeside)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoDefault, true)),
      ).toHaveNoViolations();
    });
  });
});

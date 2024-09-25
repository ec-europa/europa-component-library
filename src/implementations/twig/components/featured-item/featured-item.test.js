import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'vitest-axe';

import demoContent from '@ecl/specs-component-featured-item/demo/data';
import demoContentSimple from '@ecl/specs-component-featured-item/demo/data--simple';
import demoContentHighlight from '@ecl/specs-component-featured-item/demo/data--highlight';

expect.extend(toHaveNoViolations);

describe('Featured item', () => {
  const template = '@ecl/featured-item/featured-item.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContent)).resolves.toMatchSnapshot();
    });

    test('renders correctly without image', () => {
      expect.assertions(1);
      const withoutImage = { ...demoContent, media_container: false };

      return expect(render(withoutImage)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, demoContent, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Simple', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContentSimple)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, demoContentSimple, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('Highlight', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContentHighlight)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, demoContentHighlight, true),
        ),
      ).toHaveNoViolations();
    });
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);

    const withExtraClasses = merge(demoContent, {
      extra_classes: 'custom-class custom-class--test',
    });

    return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes', () => {
    expect.assertions(1);

    const withExtraAttributes = merge(demoContent, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
  });
});

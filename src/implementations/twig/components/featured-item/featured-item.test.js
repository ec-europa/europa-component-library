import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoContent from '@ecl/specs-component-featured-item/demo/data';
import demoContentExtended from '@ecl/specs-component-featured-item/demo/data--extended';

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
        await axe(renderTwigFileAsHtml(template, demoContent, true))
      ).toHaveNoViolations();
    });
  });

  describe('Extended', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoContentExtended)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(renderTwigFileAsHtml(template, demoContentExtended, true))
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

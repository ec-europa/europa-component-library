import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataStoryCard from './demo/data';
import dataStoryCardTestimonial from './demo/data--testimonial';

expect.extend(toHaveNoViolations);

describe('Story Card', () => {
  const template = '@ecl/story-card/story-card.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Story variant (default)', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataStoryCard)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataStoryCard, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataStoryCard, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  test('passes the accessibility tests', async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataStoryCard, true)),
    ).toHaveNoViolations();
  });

  describe('Testimonial variant', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(
        render(dataStoryCardTestimonial),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataStoryCardTestimonial, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataStoryCardTestimonial, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  test('passes the accessibility tests', async () => {
    expect(
      await axe(
        await renderTwigFileAsHtml(template, dataStoryCardTestimonial, true),
      ),
    ).toHaveNoViolations();
  });
});

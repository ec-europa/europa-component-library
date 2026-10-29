import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataWithSelect from './demo/data';

const { search_select: searchSelect, ...data } = dataWithSelect;

expect.extend(toHaveNoViolations);

describe('Highlighted search', () => {
  const template = '@ecl/highlighted-search/highlighted-search.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);
      return expect(
        render(
          merge(data, { extra_classes: 'custom-class custom-class--test' }),
        ),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);
      return expect(
        render(
          merge(data, {
            extra_attributes: [
              { name: 'data-test', value: 'data-test-value' },
              { name: 'data-test-1', value: 'data-test-value-1' },
            ],
          }),
        ),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with a form action', () => {
      expect.assertions(1);
      return expect(
        render(
          merge(data, {
            form_extra_attributes: [
              {
                name: 'action',
                value: '/search-results?category=jobs&lang=en',
              },
            ],
          }),
        ),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly aligned on the left', () => {
      expect.assertions(1);
      return expect(
        render({ ...data, horizontal_alignment: 'left' }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly in full width', () => {
      expect.assertions(1);
      return expect(
        render({ ...data, full_width: true }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly without a search helper', () => {
      expect.assertions(1);
      return expect(
        render({ ...data, search_helper: '' }),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });

  describe('With select', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataWithSelect)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataWithSelect, true)),
      ).toHaveNoViolations();
    });
  });
});

import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from './demo/data';

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

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });
});

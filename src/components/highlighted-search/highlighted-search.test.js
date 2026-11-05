import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataAllFields from './demo/data';

const [textField, selectField, , multipleSelectField] =
  dataAllFields.search_fields;
const data = { ...dataAllFields, search_fields: [textField] };
const dataWithSelect = {
  ...dataAllFields,
  search_fields: [textField, selectField],
};
const dataMultipleSelect = {
  ...dataAllFields,
  search_fields: [textField, multipleSelectField],
};
// Deprecated parameters, kept for backward compatibility
const { search_fields: searchFields, ...dataLegacy } = {
  ...dataAllFields,
  search_input: {
    id: 'highlighted-search-input-id',
    name: 'highlighted-search-input-name',
    placeholder: 'Enter a search keyword',
  },
  search_helper: textField.helper_text,
};

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

    test('renders correctly without a helper text', () => {
      expect.assertions(1);
      return expect(
        render({
          ...data,
          search_fields: [{ ...textField, helper_text: '' }],
        }),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with a hidden label', () => {
      expect.assertions(1);
      return expect(
        render({
          ...data,
          search_fields: [{ ...textField, hide_label: true }],
        }),
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

    test('renders correctly with a multiple select', () => {
      expect.assertions(1);
      return expect(render(dataMultipleSelect)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataWithSelect, true)),
      ).toHaveNoViolations();
    });
  });

  describe('With all field types', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataAllFields)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataAllFields, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Deprecated parameters', () => {
    test('renders correctly with search_input and search_helper', () => {
      expect.assertions(1);
      return expect(render(dataLegacy)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataLegacy, true)),
      ).toHaveNoViolations();
    });

    test('ignores search_input when search_fields is provided', () => {
      expect.assertions(1);
      return expect(
        render({ ...dataLegacy, search_fields: [textField] }),
      ).resolves.toMatchSnapshot();
    });
  });
});

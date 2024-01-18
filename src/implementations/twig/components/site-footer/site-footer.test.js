import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataCoreEC from '@ecl/specs-component-site-footer/demo/data-core--ec';
import dataStandardisedEC from '@ecl/specs-component-site-footer/demo/data-standardised--ec';
import dataHarmonisedEC from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import dataCoreEU from '@ecl/specs-component-site-footer/demo/data-core--eu';
import dataHarmonisedEU from '@ecl/specs-component-site-footer/demo/data-harmonised--eu';

expect.extend(toHaveNoViolations);

describe('Site Footer', () => {
  const template = '@ecl/site-footer/site-footer.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Core EC', () => {
    const options = dataCoreEC;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCoreEC, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Standardised EC', () => {
    const options = dataStandardisedEC;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, dataStandardisedEC, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('Harmonised EC', () => {
    const options = dataHarmonisedEC;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataHarmonisedEC, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Core EU', () => {
    const options = dataCoreEU;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCoreEU, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Harmonised EU', () => {
    const options = dataHarmonisedEU;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test(`passes the accessibility tests`, async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataHarmonisedEU, true)),
      ).toHaveNoViolations();
    });
  });
});

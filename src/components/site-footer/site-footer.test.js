import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataCoreEC from '@ecl/site-footer/demo/data-core--ec';
import dataStandardisedEC from '@ecl/site-footer/demo/data-standardised--ec';
import dataHarmonisedEC from '@ecl/site-footer/demo/data-harmonised--ec';
import dataCoreEU from '@ecl/site-footer/demo/data-core--eu';
import dataHarmonisedEU from '@ecl/site-footer/demo/data-harmonised--eu';

expect.extend(toHaveNoViolations);

describe('Site Footer EC', () => {
  const template = '@ecl/site-footer/site-footer-ec.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Core', () => {
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

    test('renders correctly with a single co-owner link', () => {
      expect.assertions(1);

      const singleCoOwnerLink = {
        ...options,
        co_owner: { ...options.co_owner, links: [options.co_owner.links[0]] },
      };

      return expect(render(singleCoOwnerLink)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCoreEC, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Standardised', () => {
    const options = dataStandardisedEC;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(
          await renderTwigFileAsHtml(template, dataStandardisedEC, true),
        ),
      ).toHaveNoViolations();
    });
  });

  describe('Harmonised', () => {
    const options = dataHarmonisedEC;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a single section link', () => {
      expect.assertions(1);

      const singleSectionLink = {
        ...options,
        section_about: {
          ...options.section_about,
          links: [options.section_about.links[0]],
        },
      };

      return expect(render(singleSectionLink)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataHarmonisedEC, true)),
      ).toHaveNoViolations();
    });
  });
});

describe('Site Footer EU', () => {
  const template = '@ecl/site-footer/site-footer-eu.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Core', () => {
    const options = dataCoreEU;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a single co-owner link', () => {
      expect.assertions(1);

      const singleCoOwnerLink = {
        ...options,
        co_owner: { ...options.co_owner, links: [options.co_owner.links[0]] },
      };

      return expect(render(singleCoOwnerLink)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataCoreEU, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Harmonised', () => {
    const options = dataHarmonisedEU;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataHarmonisedEU, true)),
      ).toHaveNoViolations();
    });
  });
});

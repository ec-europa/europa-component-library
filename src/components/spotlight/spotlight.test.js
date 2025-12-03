import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import spotlightData from './demo/data--image';

expect.extend(toHaveNoViolations);

describe('Spotlight', () => {
  const template = '@ecl/spotlight/spotlight.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Image', () => {
    const data = spotlightData;

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly without header', () => {
      expect.assertions(1);

      const dataNoHeader = JSON.parse(JSON.stringify(spotlightData));
      delete dataNoHeader.header;

      return expect(render(dataNoHeader)).resolves.toMatchSnapshot();
    });

    test('renders correctly without credit', () => {
      expect.assertions(1);

      const dataNoCredit = JSON.parse(JSON.stringify(spotlightData));
      delete dataNoCredit.credit;

      return expect(render(dataNoCredit)).resolves.toMatchSnapshot();
    });

    test('renders correctly without anchor', () => {
      expect.assertions(1);

      const dataNoAnchor = JSON.parse(JSON.stringify(spotlightData));
      dataNoAnchor.has_anchor = false;

      return expect(render(dataNoAnchor)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });
});

import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import dataTile from '@ecl/specs-component-card/demo/data--tile';
import dataTileTaxonomy from '@ecl/specs-component-card/demo/data--tile-taxonomy';

describe('Content item', () => {
  const template = '@ecl/card/card.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataCard)).resolves.toMatchSnapshot();
    });

    test('renders correctly with lists', () => {
      expect.assertions(1);
      return expect(render(dataCardTaxonomy)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCard, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCard, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Tile', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataTile)).resolves.toMatchSnapshot();
    });

    test('renders correctly with lists', () => {
      expect.assertions(1);
      return expect(render(dataTileTaxonomy)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataTile, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataTile, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});

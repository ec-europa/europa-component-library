import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import dataUnorderedListText from '@ecl/specs-component-unordered-list/demo/data--text';
import dataUnorderedListDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';
import dataUnorderedListNoBullet from '@ecl/specs-component-unordered-list/demo/data--no-bullet';

describe('Unordered list', () => {
  const template = '@ecl/unordered-list/unordered-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataUnorderedListText)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataUnorderedListText, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with no-bullet variant', () => {
      expect.assertions(1);

      return expect(
        render(dataUnorderedListNoBullet)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with divider variant', () => {
      expect.assertions(1);

      return expect(
        render(dataUnorderedListDivider)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataUnorderedListText, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataUnorderedListText, _compliance_: true };
      dataCompliance.items[1].label = '';
      dataCompliance.items[0].nested[0].label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import data from './demo/data';
import dataLinkDivider from './demo/data--with-divider';
import dataLinkNoBullet from './demo/data--without-bullet';

describe('EC - Unordered list', () => {
  const template =
    '@ecl-twig/ec-component-unordered-list/ecl-unordered-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with no-bullet variant', () => {
      expect.assertions(1);

      return expect(render(dataLinkNoBullet)).resolves.toMatchSnapshot();
    });

    test('renders correctly with divider variant', () => {
      expect.assertions(1);

      return expect(render(dataLinkDivider)).resolves.toMatchSnapshot();
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

    test('with missing input data and debug enabled returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...data, _compliance_: true };
      dataCompliance.items[1].label = '';
      dataCompliance.items[0].nested[0].label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Add SVG icon path.
demoData.button.icon.path = 'static/icons.svg';

describe('EC - Dropdown legacy', () => {
  const template =
    '@ecl-twig/ec-component-dropdown-legacy/ecl-dropdown-legacy.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    const expanded = { ...demoData, expanded: true };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(expanded)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(expanded, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(expanded, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages.', () => {
      expect.assertions(1);

      const dataCompliance = { ...demoData, _compliance_: true };
      dataCompliance.list.items[1].label = '';
      dataCompliance.button.label = '';
      dataCompliance.id = '';
      dataCompliance.button.icon.path = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

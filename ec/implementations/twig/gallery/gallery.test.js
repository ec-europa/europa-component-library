import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import demoData from './demo/data';

describe('EC - Gallery', () => {
  const template = '@ecl-twig/ec-component-gallery/ecl-gallery.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(demoData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled it returns the right warning messages', () => {
      expect.assertions(1);

      const dataCompliance = { ...demoData, _compliance_: true };
      dataCompliance.overlay.download.link.label = '';
      dataCompliance.items[2].path = '';
      dataCompliance.overlay.close.icon = {};
      dataCompliance.overlay.next.label = '';
      dataCompliance.items[4].video.sources[0].src = '';
      dataCompliance.items[4].icon = {};
      dataCompliance.items[7].sources = [];

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

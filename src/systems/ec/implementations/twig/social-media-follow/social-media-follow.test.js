import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Set fake paths for svgs to render for tests.
demoData.links.forEach((link) => {
  if (link.icon) {
    link.icon.forEach((icon) => {
      icon.path = 'example'; // eslint-disable-line no-param-reassign
    });
  }
});

describe('EC - Social Media Follow', () => {
  const template =
    '@ecl-twig/ec-component-social-media-follow/ecl-social-media-follow.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  describe('Default', () => {
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
  });

  describe('Horizontal', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });

  describe('Vertical', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          ...demoData,
          variant: 'vertical',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);
      const dataCompliance = {
        ...demoData,
        _compliance_: true,
      };
      dataCompliance.description = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

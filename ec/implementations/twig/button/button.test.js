import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

describe('EC - Button', () => {
  const template = '@ecl-twig/ec-component-button/ecl-button.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Primary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataPrimary)).resolves.toMatchSnapshot();
    });
  });

  describe('Secondary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSecondary)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });
  });

  describe('Text', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGhost)).resolves.toMatchSnapshot();
    });
  });

  describe('Search', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSearch)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA button - icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';
      dataCall.icon_position = 'before';

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA button - icon after', () => {
    const buttonData = {
      label: 'CTA Button with icon',
      variant: 'call',
      icon: {
        path: 'static/icons.svg',
        type: 'ui',
        name: 'corner-arrow',
        size: 'fluid',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(buttonData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(buttonData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('with validation enabled and missing input data', () => {
    test('returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = {
        ...dataPrimary,
        label: '',
        _compliance_: true,
      };

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});

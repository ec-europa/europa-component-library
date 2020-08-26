import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataDefault from '@ecl/ec-specs-label/demo/data';

describe('EC - Label', () => {
  const template = '@ecl-twig/ec-component-label/ecl-label.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);

    const withExtraClasses = merge(dataDefault, {
      extra_classes: 'custom-class custom-class--test',
    });

    return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes', () => {
    expect.assertions(1);

    const withExtraAttributes = merge(dataDefault, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
  });

  test('with missing input data and debug enabled it returns the right warning messages.', () => {
    expect.assertions(1);

    const dataCompliance = { ...dataDefault, _compliance_: true };
    dataCompliance.label = '';

    return expect(render(dataCompliance)).resolves.toMatchSnapshot();
  });
});

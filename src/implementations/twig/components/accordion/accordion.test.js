import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoData from '@ecl/specs-component-accordion/demo/data';

describe('Accordion', () => {
  const template = '@ecl/accordion/accordion.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_classes: 'custom-class custom-class--test',
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes', () => {
    expect.assertions(1);

    const optionsWithExtraAttrs = merge(demoData, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(optionsWithExtraAttrs)).resolves.toMatchSnapshot();
  });

  test('with validation enabled and missing input data returns the right warning message', () => {
    expect.assertions(1);

    const dataCompliance = { ...demoData, _compliance_: true };
    dataCompliance.items[0].id = '';
    dataCompliance.items[0].toggle.label = '';

    return expect(render(dataCompliance)).resolves.toMatchSnapshot();
  });
});

import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

demoData.items.forEach((item) => {
  item.toggle.icon.path = 'static/icons';
});

describe('EC - Accordion', () => {
  const template = '@ecl-twig/ec-component-accordion/ecl-accordion.html.twig';
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

    const optionsWithExtraAttributes = merge(demoData, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(
      render(optionsWithExtraAttributes)
    ).resolves.toMatchSnapshot();
  });

  test('with validation enabled and missing input data returns the right warning message', () => {
    expect.assertions(1);

    const dataCompliance = { ...demoData, _compliance_: true };
    dataCompliance.items[0].id = '';
    dataCompliance.items[0].toggle.label = '';

    return expect(render(dataCompliance)).resolves.toMatchSnapshot();
  });
});

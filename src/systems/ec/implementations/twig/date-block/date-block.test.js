import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

describe('EC - Date Block', () => {
  const template = '@ecl-twig/ec-component-date-block/ecl-date-block.html.twig';
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

    const optionsWithExtraClasses = merge(demoData, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with time set', () => {
    expect.assertions(1);

    const optionsWithTimeSet = merge(demoData, {
      date_time: '15:30',
    });

    return expect(render(optionsWithTimeSet)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes and time set', () => {
    expect.assertions(1);

    const optionsWithExtraClassesAndTime = merge(demoData, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
      date_time: '15:30',
    });

    return expect(
      render(optionsWithExtraClassesAndTime)
    ).resolves.toMatchSnapshot();
  });

  test('with validation enabled and missing input data returns the right warning message', () => {
    expect.assertions(1);

    const dataCompliance = { ...demoData, _compliance_: true };
    dataCompliance.year = '';

    return expect(render(dataCompliance)).resolves.toMatchSnapshot();
  });
});

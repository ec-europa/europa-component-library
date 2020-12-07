import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import demoData from '@ecl/specs-component-timeline/demo/data';

describe('Timeline', () => {
  const template = '@ecl/timeline/timeline.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly without hidden items', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with hidden items', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_classes: 'custom-class custom-class--test',
      hide: {
        from: 5,
        to: -2,
      },
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with positive hide.to', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_classes: 'custom-class custom-class--test',
      hide: {
        from: 5,
        to: -2,
      },
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly without hide.from or hide.to', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      hide: {},
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly without hide.to', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      hide: {},
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with hidden items but no items after button', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_classes: 'custom-class custom-class--test',
      hide: {
        from: 5,
        to: -2,
      },
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly without hide', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      hide: undefined,
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
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
      extra_classes: 'custom-class custom-class--test',
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });
});

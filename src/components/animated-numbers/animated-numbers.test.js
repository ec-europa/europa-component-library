import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from './demo/data';

expect.extend(toHaveNoViolations);

describe('Animated Numbers', () => {
  const template = '@ecl/animated-numbers/animated-numbers.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with a background', () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, with_background: true }),
    ).resolves.toMatchSnapshot();
  });

  test('renders correctly in full width', () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, full_width: true }),
    ).resolves.toMatchSnapshot();
  });

  test('renders correctly with a border', () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, border: true }),
    ).resolves.toMatchSnapshot();
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

  test('passes the accessibility tests', async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});

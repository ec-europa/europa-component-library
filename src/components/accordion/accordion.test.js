import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from '@ecl/specs-component-accordion/demo/data';

expect.extend(toHaveNoViolations);

const oldData = JSON.parse(JSON.stringify(demoData));
oldData.icon.splice(1, 1);

describe('Accordion', () => {
  const template = '@ecl/accordion/accordion.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with old data', () => {
    expect.assertions(1);

    return expect(render(oldData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with a single icon', () => {
    expect.assertions(1);

    oldData.icon[0].name = 'corner-arrow';

    return expect(render(oldData)).resolves.toMatchSnapshot();
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

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});

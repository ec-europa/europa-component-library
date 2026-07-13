import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import demoData from './demo/data';
import demoSidebar from './demo/data--sidebar';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  const template = '@ecl/accordion/accordion.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly in the sidebar', () => {
    expect.assertions(1);

    return expect(render(demoSidebar)).resolves.toMatchSnapshot();
  });

  test('renders correctly in the sidebar with a custom media query', () => {
    expect.assertions(1);

    return expect(
      render({ ...demoSidebar, sidebar_media_query: '(min-width: 768px)' }),
    ).resolves.toMatchSnapshot();
  });

  test('renders correctly with a single custom icon', () => {
    expect.assertions(1);

    const optionsWithSingleIcon = merge(demoData, {
      icon: { name: 'corner-arrow', family: 'phosphor' },
    });

    return expect(render(optionsWithSingleIcon)).resolves.toMatchSnapshot();
  });

  test('renders correctly with a custom icon pair', () => {
    expect.assertions(1);

    const optionsWithCustomIcons = merge(demoData, {
      icon: [
        { name: 'corner-arrow', family: 'phosphor' },
        { name: 'close', family: 'phosphor' },
      ],
    });

    return expect(render(optionsWithCustomIcons)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra toggle class names', () => {
    expect.assertions(1);

    const optionsWithExtraToggleClasses = JSON.parse(JSON.stringify(demoData));
    optionsWithExtraToggleClasses.items[0].toggle.extra_classes =
      'custom-class custom-class--test';

    return expect(
      render(optionsWithExtraToggleClasses),
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
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });
});

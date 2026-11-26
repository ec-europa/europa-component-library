import { merge, renderTwigFileAsNode } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from './demo/data';

expect.extend(toHaveNoViolations);

describe('Form wrapper', () => {
  const template = '@ecl/form-wrapper/form-wrapper.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);
    return expect(render(data)).resolves.toMatchSnapshot();
  });

  test('renders correctly as a div', () => {
    expect.assertions(1);
    return expect(
      render(merge(data, { tag: 'div' })),
    ).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);
    return expect(
      render(merge(data, { extra_classes: 'custom-class custom-class--test' })),
    ).resolves.toMatchSnapshot();
  });

  test('passes the accessibility tests', async () => {
    expect(
      await axe(await renderTwigFileAsNode(template, data)),
    ).toHaveNoViolations();
  });
});

import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Page example - Inner', () => {
  const template = '@ecl/inner/inner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render()).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, {}, true)),
    ).toHaveNoViolations();
  });
});

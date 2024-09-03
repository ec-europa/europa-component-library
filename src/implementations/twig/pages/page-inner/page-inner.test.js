import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import dataInner from '@ecl/specs-page-inner/demo/data';

expect.extend(toHaveNoViolations);

describe('Page example - Inner', () => {
  const template = '@ecl/page-inner/page-inner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(dataInner)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataInner)),
    ).toHaveNoViolations();
  }, 20000);
});

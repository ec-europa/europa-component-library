import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import dataHome from '@ecl/specs-page-home/demo/data';

expect.extend(toHaveNoViolations);

describe('Page example - Home', () => {
  const template = '@ecl/page-home/page-home.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(dataHome)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataHome)),
    ).toHaveNoViolations();
  }, 20000);
});

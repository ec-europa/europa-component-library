import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('File upload status', () => {
  const template = '@ecl/file-upload-status/file-upload-status.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly with languages status', () => {
    expect.assertions(1);

    return expect(render()).resolves.toMatchSnapshot();
  });

  test('renders correctly without languages status', () => {
    expect.assertions(1);

    return expect(render()).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, {}, true))
    ).toHaveNoViolations();
  });
});

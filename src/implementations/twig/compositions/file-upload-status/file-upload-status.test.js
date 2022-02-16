import { renderTwigFileAsNode } from '@ecl/test-utils';

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
});

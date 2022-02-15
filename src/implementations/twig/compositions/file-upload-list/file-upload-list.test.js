import { renderTwigFileAsNode } from '@ecl/test-utils';

describe('File upload list', () => {
  const template = '@ecl/file-upload-list/file-upload-list.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly with languages list', () => {
    expect.assertions(1);

    return expect(render()).resolves.toMatchSnapshot();
  });

  test('renders correctly without languages list', () => {
    expect.assertions(1);

    return expect(render()).resolves.toMatchSnapshot();
  });
});

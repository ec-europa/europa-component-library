import path from 'path';
import { renderWebComponent } from '@ecl/test-utils';

import data from '@ecl/specs-component-blockquote/demo/data';

const file = path.resolve(__dirname, 'ecl-blockquote.js');
const img =
  'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg';

describe('Blockquote', () => {
  const render = (html) => renderWebComponent('ecl-blockquote', file, html);

  test('EC renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-blockquote data-author="${data.author}" data-citation="${data.citation}"></ecl-blockquote>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('EU renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-blockquote data-author="${data.author}" data-system="eu" data-citation="${data.citation}"></ecl-blockquote>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With image renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-blockquote data-author="${data.author}" data-image="${img}" data-citation="${data.citation}"></ecl-blockquote>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With image and aria-label renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-blockquote data-author="${data.author}" data-image="${img}" data-aria-label="Test aria label" data-citation="${data.citation}"></ecl-blockquote>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });
});

import path from 'path';
import { renderWebComponent } from '@ecl/test-utils';

import data from '@ecl/specs-component-message/demo/data--info';

const file = path.resolve(__dirname, 'src/ecl-message.js');

describe('Message', () => {
  const render = (html) => renderWebComponent('ecl-message', file, html);

  test('EC renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-message data-variant="${data.variant}"></ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('EU renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-message data-system="eu" data-variant="${data.variant}"></ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With attributes and classes renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head><ecl-message data-classes='["extra-class", "extra-class-2"]' data-attributes='{"test-attribute": "test-value"}'></ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });
});

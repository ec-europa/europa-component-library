import path from 'path';
import { renderWebComponent } from '@ecl/test-utils';

import data from '@ecl/specs-component-message/demo/data--info';

const file = path.resolve(__dirname, 'src/scripts/ecl-message.js');

describe('Message', () => {
  const render = (html) => renderWebComponent('ecl-message', file, html);

  test('EC renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message
        data-variant="${data.variant}"
        data-title="${data.title}"
        data-description="${data.description}"
        data-icon-path="/icons.svg"
        data-ecl-script
        data-ecl-auto-init
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('EU renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-system="eu"
        data-title="${data.title}"
        data-description="${data.description}"
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
        data-ecl-script
        data-ecl-auto-init
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('Without ecl javascript renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-classes='["extra-class", "extra-class-2"]'
        data-attributes='{"test-attribute": "test-value"}'
        data-title="${data.title}"
        data-description="${data.description}"
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('Without autoInit renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-classes='["extra-class", "extra-class-2"]'
        data-attributes='{"test-attribute": "test-value"}'
        data-title="${data.title}"
        data-description="${data.description}"
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
        data-ecl-script
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With no title renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-classes='["extra-class", "extra-class-2"]'
        data-attributes='{"test-attribute": "test-value"}'
        data-title=""
        data-description="${data.description}"
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
        data-ecl-script
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With no description renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-classes='["extra-class", "extra-class-2"]'
        data-attributes='{"test-attribute": "test-value"}'
        data-title="${data.title}"
        data-description=""
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
        data-ecl-script
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With attributes and classes renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-message 
        data-classes='["extra-class", "extra-class-2"]'
        data-attributes='{"test-attribute": "test-value"}'
        data-title="${data.title}"
        data-description="${data.description}"
        data-variant="${data.variant}"
        data-icon-path="/icons.svg"
      >
      </ecl-message>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });
});

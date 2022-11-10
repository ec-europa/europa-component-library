import path from 'path';
import { renderWebComponent } from '@ecl/test-utils';

import data from '@ecl/specs-component-button/demo/data--primary';

const file = path.resolve(__dirname, 'src/scripts/ecl-button.js');

describe('Button', () => {
  const render = (html) => renderWebComponent('ecl-button', file, html);

  test('EC renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-button
        data-label="${data.label}"
        data-icon-path="/icons.svg"
        data-system="ec"
      >
      </ecl-button>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('EU renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-button
        data-label="${data.label}"
        data-icon-path="/icons.svg"
        data-system="eu"
      >
      </ecl-button>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  const variants = ['primary', 'ghost', 'secondary', 'call'];

  variants.forEach((variant) => {
    test(`${variant} renders correctly`, () => {
      expect.assertions(1);
      const html = `<head></head>
        <ecl-button
          data-variant="${variant}"
          data-label="${data.label}"
          data-icon-path="/icons.svg"
          data-system="ec"
        >
        </ecl-button>`;

      return expect(render(html)).resolves.toMatchSnapshot();
    });
  });

  test('With icon renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-button
        data-variant="${data.variant}"
        data-label="${data.label}"
        data-icon-path="/icons.svg"
        data-system="ec"
        data-icon-name="corner-arrow"
        data-icon-transform="rotate-90"
      >
      </ecl-button>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With icon before renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-button
        data-variant="${data.variant}"
        data-label="${data.label}"
        data-icon-path="/icons.svg"
        data-system="ec"
        data-icon-name="corner-arrow"
        data-icon-transform="rotate-90"
        data-icon-position="before"
      >
      </ecl-button>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });

  test('With attributes renders correctly', () => {
    expect.assertions(1);
    const html = `<head></head>
      <ecl-button
        data-variant="${data.variant}"
        data-label="${data.label}"
        data-icon-path="/icons.svg"
        data-system="ec"
        data-icon-name="corner-arrow"
        data-icon-transform="rotate-90"
        data-icon-position="before"
        test-attribute="test-value"
      >
      </ecl-button>`;

    return expect(render(html)).resolves.toMatchSnapshot();
  });
});

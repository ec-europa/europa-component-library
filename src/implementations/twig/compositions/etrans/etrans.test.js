import { renderTwigFileAsNode, renderTwigFileAsHtml } from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataDefault from '@ecl/specs-composition-etrans/demo/data--default';
import dataNoLanguage from '@ecl/specs-composition-etrans/demo/data--no-languages';

expect.extend(toHaveNoViolations);

describe('eTrans EC', () => {
  const template = '@ecl/etrans/etrans-ec.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly with languages list', () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test('renders correctly without languages list', () => {
    expect.assertions(1);

    return expect(render(dataNoLanguage)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataDefault, true))
    ).toHaveNoViolations();
  });
});

describe('eTrans EU', () => {
  const template = '@ecl/etrans/etrans-eu.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test('renders correctly with languages list', () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test('renders correctly without languages list', () => {
    expect.assertions(1);

    return expect(render(dataNoLanguage)).resolves.toMatchSnapshot();
  });
});

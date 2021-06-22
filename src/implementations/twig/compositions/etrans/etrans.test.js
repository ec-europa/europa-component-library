import { renderTwigFileAsNode } from '@ecl/test-utils';

import dataDefault from '@ecl/specs-composition-etrans/demo/data';

const dataNoLanguage = { ...dataDefault };
delete dataNoLanguage.expandable;

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

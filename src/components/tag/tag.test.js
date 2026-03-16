import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import dataSingle from './demo/data';
import dataSet from './demo/data--set';

const dataRemovable = JSON.parse(JSON.stringify(dataSingle));
dataRemovable.tag.type = 'removable';
const dataPrefilter = JSON.parse(JSON.stringify(dataSingle));
dataPrefilter.tag.type = 'prefilter';
const dataSetPrefilter = JSON.parse(JSON.stringify(dataSet));
dataSetPrefilter.variant = 'prefilter';

expect.extend(toHaveNoViolations);

describe('Tag', () => {
  const template = '@ecl/tag/tag.html.twig';
  const templateSet = '@ecl/tag/tag-set.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);
  const renderSet = (params) => renderTwigFileAsNode(templateSet, params);

  describe('Link', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataSingle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with an external link', () => {
      expect.assertions(1);

      const withExternal = { ...dataSingle.tag, external: true };
      const optionsWithExternal = {
        ...dataSingle,
        tag: withExternal,
      };

      return expect(render(optionsWithExternal)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSingle, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSingle, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataSingle, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Removable', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataRemovable)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataRemovable, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Prefilter', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataPrefilter)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, dataPrefilter, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Set', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(renderSet(dataSet)).resolves.toMatchSnapshot();
    });

    test('renders correctly (prefilter)', () => {
      expect.assertions(1);
      return expect(renderSet(dataSetPrefilter)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSet, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(
        renderSet(optionsWithExtraClasses),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSet, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(
        renderSet(optionsWithExtraClasses),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(templateSet, dataSet, true)),
      ).toHaveNoViolations();
    });
  });
});

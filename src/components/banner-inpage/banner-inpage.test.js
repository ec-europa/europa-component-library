import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import bannerDataImage from './demo/data--image';
import bannerDataVideo from './demo/data--video';

expect.extend(toHaveNoViolations);
const dataClone = JSON.parse(JSON.stringify(bannerDataImage));

describe('Banner inpage', () => {
  const template = '@ecl/banner-inpage/banner-inpage.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Image', () => {
    const data = bannerDataImage;

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly without title', () => {
      expect.assertions(1);

      const dataNoTitle = JSON.parse(JSON.stringify(bannerDataImage));
      delete dataNoTitle.title;

      return expect(render(dataNoTitle)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra classes for the title link', () => {
      expect.assertions(1);

      dataClone.title.extra_classes = 'custom-title-link-class';

      return expect(render(dataClone)).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });

  describe('Video', () => {
    const data = bannerDataVideo;

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes for the video', () => {
      expect.assertions(1);
      const dataVideo = {
        ...data.video,
        extra_attributes: [{ name: 'data-test-extra-attribute' }],
      };
      const dataAttributes = { ...data, video: dataVideo };
      return expect(render(dataAttributes)).resolves.toMatchSnapshot();
    });
  });
});

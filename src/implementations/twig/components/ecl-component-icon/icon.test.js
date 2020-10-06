import { merge, renderTwigFileAsNode } from '@ecl/test-utils';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataBranded from '@ecl/ecl-specs-icon/demo/data--branded';
import dataNotifications from '@ecl/ecl-specs-icon/demo/data--notifications';
import dataUi from '@ecl/ecl-specs-icon/demo/data--general';

describe('ECL - Icon', () => {
  const template = '@ecl-twig/ecl-component-icon/ecl-icon.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Branded', () => {
    brandedIcons.forEach((icon) => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(dataBranded, {
          icon: {
            name: icon,
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Notifications', () => {
    notificationsIcons.forEach((icon) => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(dataNotifications, {
          icon: {
            name: icon,
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('General', () => {
    generalIcons.forEach((icon) => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(dataUi, {
          icon: {
            name: icon,
            type: 'general',
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('UI', () => {
    uiIcons.forEach((icon) => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(dataUi, {
          icon: {
            name: icon,
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Generic tests - Any icon', () => {
    const options = merge(dataUi, {
      icon: {
        name: generalIcons[0],
        type: 'general',
      },
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});

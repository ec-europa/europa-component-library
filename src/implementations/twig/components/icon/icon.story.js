import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getIconControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataBranded from '@ecl/specs-component-icon/demo/data--branded';
import iconsBrandedEc from '@ecl/resources-ec-icons/dist/lists/branded.json';
import iconsBrandedEu from '@ecl/resources-eu-icons/dist/lists/branded.json';
import dataGeneral from '@ecl/specs-component-icon/demo/data--general';
import iconsGeneralEc from '@ecl/resources-ec-icons/dist/lists/general.json';
import iconsGeneralEu from '@ecl/resources-eu-icons/dist/lists/general.json';
import dataNotification from '@ecl/specs-component-icon/demo/data--notifications';
import iconsNotificationEc from '@ecl/resources-ec-icons/dist/lists/notifications.json';
import iconsNotificationEu from '@ecl/resources-eu-icons/dist/lists/notifications.json';
import dataUI from '@ecl/specs-component-icon/demo/data--ui';
import iconsUIEc from '@ecl/resources-ec-icons/dist/lists/ui.json';
import iconsUIEu from '@ecl/resources-eu-icons/dist/lists/ui.json';

import icon from './icon.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsBranded = system === 'eu' ? iconsBrandedEu : iconsBrandedEc;
const iconsGeneral = system === 'eu' ? iconsGeneralEu : iconsGeneralEc;
const iconsNotification =
  system === 'eu' ? iconsNotificationEu : iconsNotificationEc;
const iconsUI = system === 'eu' ? iconsUIEu : iconsUIEc;

const getArgTypes = (data, icons) => getIconControls(data, icons);

const prepareData = (data, args) => {
  correctSvgPath(data);
  data.icon.name = args.name;
  data.icon.size = args.size;
  data.icon.color = args.color;
  data.extra_classes = data.icon.color === 'inverted' ? 'ecl-u-bg-grey' : '';
  data.icon.transform = args.transform;
  return data;
};

export default {
  title: 'Components/Icon',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Branded = (args) => icon(prepareData(dataBranded, args));

Branded.storyName = 'branded';
Branded.argTypes = getArgTypes(dataBranded, iconsBranded);
Branded.parameters = { notes: { markdown: notes, json: dataBranded } };

export const General = (args) => icon(prepareData(dataGeneral, args));

General.storyName = 'general';
General.argTypes = getArgTypes(dataGeneral, iconsGeneral);
General.parameters = { notes: { markdown: notes, json: dataGeneral } };

export const Notification = (args) => icon(prepareData(dataNotification, args));

Notification.storyName = 'notification';
Notification.argTypes = getArgTypes(dataNotification, iconsNotification);
Notification.parameters = {
  notes: { markdown: notes, json: dataNotification },
};

export const UI = (args) => icon(prepareData(dataUI, args));

UI.storyName = 'ui';
UI.argTypes = getArgTypes(dataUI, iconsUI);
UI.parameters = { notes: { markdown: notes, json: dataUI } };

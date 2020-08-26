import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getIconKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataBranded from './demo/data--branded';
import dataNotifications from './demo/data--notifications';
import dataGeneral from './demo/data--general';
import dataUi from './demo/data--ui';

import icon from './ecl-icon.html.twig';
import notes from './README.md';

const prepareIcon = (data, name) => {
  getIconKnobs(data, name, data.icon.type);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Icon',
  decorators: [withKnobs, withNotes, withCode],
};

export const Branded = () => {
  const iconName = select(
    'icon.name',
    brandedIcons,
    brandedIcons[0],
    tabLabels.required
  );
  const dataStory = prepareIcon(dataBranded, iconName);

  return icon(dataStory);
};

Branded.storyName = 'branded';
Branded.parameters = { notes: { markdown: notes, json: dataBranded } };

export const General = () => {
  const iconName = select(
    'icon.name',
    generalIcons,
    generalIcons[0],
    tabLabels.required
  );
  const dataStory = prepareIcon(dataGeneral, iconName);

  return icon(dataStory);
};

General.storyName = 'general';
General.parameters = { notes: { markdown: notes, json: dataGeneral } };

export const Notifications = () => {
  const iconName = select(
    'icon.name',
    notificationsIcons,
    notificationsIcons[0],
    tabLabels.required
  );
  const dataStory = prepareIcon(dataNotifications, iconName);

  return icon(dataStory);
};

Notifications.storyName = 'notifications';
Notifications.parameters = {
  notes: { markdown: notes, json: dataNotifications },
};

export const Ui = () => {
  const iconName = select('icon.name', uiIcons, uiIcons[0], tabLabels.required);
  const dataStory = prepareIcon(dataUi, iconName);

  return icon(dataStory);
};

Ui.storyName = 'ui';
Ui.parameters = { notes: { markdown: notes, json: dataUi } };

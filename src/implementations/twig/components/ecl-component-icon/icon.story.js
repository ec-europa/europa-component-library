import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, getIconKnobs, tabLabels } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code-twig';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataBranded from '@ecl/specs-component-icon/demo/data--branded';
import dataNotifications from '@ecl/specs-component-icon/demo/data--notifications';
import dataGeneral from '@ecl/specs-component-icon/demo/data--audio';
import dataUi from '@ecl/specs-component-icon/demo/data--ui';

import icon from './ecl-icon.html.twig';
import notes from './README.md';

const prepareIcon = (data, name) => {
  getIconKnobs(data, name, data.icon.type);
  getExtraKnobs(data);

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

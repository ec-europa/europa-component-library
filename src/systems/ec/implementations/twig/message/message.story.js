import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
// Import data for demos
import dataInfo from './demo/data--info';
import dataSuccess from './demo/data--success';
import dataError from './demo/data--error';
import dataWarning from './demo/data--warning';

import message from './ecl-message.html.twig';
import notes from './README.md';

const prepareMessage = (data) => {
  data.title = text('title', data.title, tabLabels.required);
  data.description = text('description', data.description, tabLabels.required);
  data.variant = select(
    'variant',
    [data.variant],
    data.variant,
    tabLabels.required
  );
  const name = select(
    'icon.name',
    [data.icon.name],
    data.icon.name,
    tabLabels.required
  );

  getIconKnobs(data, name, 'notifications', 'l', 'primary', 'none');

  data.close.label = text('close.label', data.close.label, tabLabels.required);
  data.close.icon.path = optionsKnob(
    'close.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Messages',
  decorators: [withKnobs, withCode, withNotes],
};

export const Info = () => message(prepareMessage(dataInfo));

Info.storyName = 'Info';
Info.parameters = { notes: { markdown: notes, json: dataInfo } };

export const Success = () => message(prepareMessage(dataSuccess));

Success.storyName = 'Success';
Success.parameters = { notes: { markdown: notes, json: dataSuccess } };

export const Error = () => message(prepareMessage(dataError));

Error.storyName = 'Error';
Error.parameters = { notes: { markdown: notes, json: dataError } };

export const Warning = () => message(prepareMessage(dataWarning));

Warning.storyName = 'Warning';
Warning.parameters = { notes: { markdown: notes, json: dataWarning } };

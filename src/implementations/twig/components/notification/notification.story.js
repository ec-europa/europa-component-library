import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import dataInfo from '@ecl/specs-component-notification/demo/data--info';
import dataSuccess from '@ecl/specs-component-notification/demo/data--success';
import dataError from '@ecl/specs-component-notification/demo/data--error';
import dataWarning from '@ecl/specs-component-notification/demo/data--warning';

import notification from './notification.html.twig';
import notes from './README.md';

const system = getSystem();

if (system === 'eu') {
  dataInfo.icon.size = 'm';
  dataSuccess.icon.size = 'm';
  dataWarning.icon.size = 'm';
  dataError.icon.size = 'm';
  dataInfo.close.icon.size = 's';
  dataInfo.close.icon.name = 'close-filled';
  dataInfo.close.hide_label = false;
  dataError.close.icon.size = 's';
  dataError.close.icon.name = 'close-filled';
  dataError.close.hide_label = false;
  dataSuccess.close.icon.size = 's';
  dataSuccess.close.icon.name = 'close-filled';
  dataSuccess.close.hide_label = false;
  dataWarning.close.icon.size = 's';
  dataWarning.close.icon.name = 'close-filled';
  dataWarning.close.hide_label = false;
}

const getArgs = (data) => ({
  show_close: true,
  title: data.title,
  description: data.description,
});

const getArgTypes = () => ({
  show_close: {
    name: 'close',
    type: { name: 'boolean' },
    description: 'Show the close button',
    table: {
      category: 'Optional',
    },
  },
  title: {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'The content of the title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    name: 'description',
    type: { name: 'string', required: true },
    description: 'The content of the description notification',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  // Optional elements
  if (!args.show_close) {
    delete clone.close;
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Notifications',
  decorators: [withCode, withNotes],
};

export const Info = (args) => notification(prepareData(dataInfo, args));

Info.storyName = 'Info';
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes();
Info.parameters = { notes: { markdown: notes, json: dataInfo } };

export const Success = (args) => notification(prepareData(dataSuccess, args));

Success.storyName = 'Success';
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes();
Success.parameters = { notes: { markdown: notes, json: dataSuccess } };

export const Error = (args) => notification(prepareData(dataError, args));

Error.storyName = 'Error';
Error.args = getArgs(dataError);
Error.argTypes = getArgTypes();
Error.parameters = { notes: { markdown: notes, json: dataError } };

export const Warning = (args) => notification(prepareData(dataWarning, args));

Warning.storyName = 'Warning';
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes();
Warning.parameters = { notes: { markdown: notes, json: dataWarning } };

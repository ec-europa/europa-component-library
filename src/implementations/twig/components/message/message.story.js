import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import dataInfo from '@ecl/specs-component-message/demo/data--info';
import dataSuccess from '@ecl/specs-component-message/demo/data--success';
import dataError from '@ecl/specs-component-message/demo/data--error';
import dataWarning from '@ecl/specs-component-message/demo/data--warning';

import message from './message.html.twig';
import notes from './README.md';

const system = getSystem();

if (system === 'eu') {
  dataInfo.icon.size = 'm';
  dataSuccess.icon.size = 'm';
  dataWarning.icon.size = 'm';
  dataError.icon.size = 'm';
  dataInfo.close.icon.size = 's';
  dataError.close.icon.size = 's';
  dataSuccess.close.icon.size = 's';
  dataWarning.close.icon.size = 's';
}

const getArgs = (data) => ({
  title: data.title,
  description: data.description,
});

const getArgTypes = () => ({
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
    description: 'The content of the description message',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Messages',
  decorators: [withCode, withNotes],
};

export const Info = (args) => message(prepareData(dataInfo, args));

Info.storyName = 'Info';
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes();
Info.parameters = { notes: { markdown: notes, json: dataInfo } };

export const Success = (args) => message(prepareData(dataSuccess, args));

Success.storyName = 'Success';
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes();
Success.parameters = { notes: { markdown: notes, json: dataSuccess } };

export const Error = (args) => message(prepareData(dataError, args));

Error.storyName = 'Error';
Error.args = getArgs(dataError);
Error.argTypes = getArgTypes();
Error.parameters = { notes: { markdown: notes, json: dataError } };

export const Warning = (args) => message(prepareData(dataWarning, args));

Warning.storyName = 'Warning';
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes();
Warning.parameters = { notes: { markdown: notes, json: dataWarning } };

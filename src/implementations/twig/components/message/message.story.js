import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
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

const getArgTypes = (data) => {
  return {
    title: {
      name: 'title',
      defaultValue: data.title,
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
      defaultValue: data.description,
      type: { name: 'string', required: true },
      description: 'The content of the description message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  return Object.assign(data, args);
};

export default {
  title: 'Components/Messages',
  decorators: [withCode, withNotes],
};

export const Info = (args) => message(prepareData(dataInfo, args));

Info.storyName = 'Info';
Info.argTypes = getArgTypes(dataInfo);
Info.parameters = { notes: { markdown: notes, json: dataInfo } };

export const Success = (args) => message(prepareData(dataSuccess, args));

Success.storyName = 'Success';
Success.argTypes = getArgTypes(dataSuccess);
Success.parameters = { notes: { markdown: notes, json: dataSuccess } };

export const Error = (args) => message(prepareData(dataError, args));

Error.storyName = 'Error';
Error.argTypes = getArgTypes(dataError);
Error.parameters = { notes: { markdown: notes, json: dataError } };

export const Warning = (args) => message(prepareData(dataWarning, args));

Warning.storyName = 'Warning';
Warning.argTypes = getArgTypes(dataWarning);
Warning.parameters = { notes: { markdown: notes, json: dataWarning } };

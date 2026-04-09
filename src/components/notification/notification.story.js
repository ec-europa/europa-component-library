import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import dataInfo from './demo/data--info';
import dataSuccess from './demo/data--success';
import dataError from './demo/data--error';
import dataWarning from './demo/data--warning';

import notification from './notification.html.twig';
import notes from './README.md';

const dataLinks = [...dataInfo.links];

const getArgs = (data) => ({
  show_close: true,
  show_title: true,
  title: data.title,
  show_links: true,
  description: data.description,
});

const getArgTypes = () => ({
  show_title: {
    name: 'title',
    type: { name: 'boolean' },
    description: 'Show the title',
    table: {
      category: 'Optional',
    },
  },
  show_close: {
    name: 'close',
    type: { name: 'boolean' },
    description: 'Show the close button',
    table: {
      category: 'Optional',
    },
  },
  show_links: {
    name: 'links',
    type: { name: 'boolean' },
    description: 'Show the notification links',
    table: {
      category: 'Optional',
    },
  },
  title: {
    name: 'title',
    type: { name: 'string' },
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
  if (!args.show_title) {
    delete clone.title;
  }
  if (!args.show_close) {
    delete clone.close;
  }

  if (args.show_links) {
    clone.links = dataLinks;
  } else {
    clone.links = [];
  }

  // Other controls
  if (clone.title) {
    clone.title = args.title;
  }
  if (clone.description) {
    clone.description = args.description;
  }

  return clone;
};

export default {
  title: 'Components/Notifications',
  decorators: [withCode, withNotes],
  chromatic: {
    modes: {
      s: { disable: true },
      m: { disable: true },
      xl: { disable: true },
    },
  },
};

export const Info = (_, { loaded: { component } }) => component;

Info.render = async (args) => {
  const renderedNotification = await notification(prepareData(dataInfo, args));
  return renderedNotification;
};
Info.storyName = 'Info';
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes();
Info.parameters = { notes: { markdown: notes, json: dataInfo } };

export const Success = (_, { loaded: { component } }) => component;

Success.render = async (args) => {
  const renderedNotificationSuccess = await notification(
    prepareData(dataSuccess, args),
  );
  return renderedNotificationSuccess;
};
Success.storyName = 'Success';
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes();
Success.parameters = { notes: { markdown: notes, json: dataSuccess } };

export const Error = (_, { loaded: { component } }) => component;

Error.render = async (args) => {
  const renderedNotificationError = await notification(
    prepareData(dataError, args),
  );
  return renderedNotificationError;
};
Error.storyName = 'Error';
Error.args = getArgs(dataError);
Error.argTypes = getArgTypes();
Error.parameters = { notes: { markdown: notes, json: dataError } };

export const Warning = (_, { loaded: { component } }) => component;

Warning.render = async (args) => {
  const renderedNotificationWarning = await notification(
    prepareData(dataWarning, args),
  );
  return renderedNotificationWarning;
};
Warning.storyName = 'Warning';
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes();
Warning.parameters = { notes: { markdown: notes, json: dataWarning } };

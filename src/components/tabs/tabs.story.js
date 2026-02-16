import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import demoDtaWithContent from './demo/data--with-content';
import Tabs from './tabs.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = { ...getColorModeControls() };

  return argTypes;
};

const prepareHtmlContent = (data) =>
  data.items
    .map(
      ({ label }, index) => `
    <div id="ecl-tabs-${index + 1}">
      <h2 class="ecl-u-type-heading-2">${label} content</h2>
      <img src="https://picsum.photos/300/200?${Math.random()}" alt="Random image">
      <div><button class="ecl-button ecl-button--primary">Button</button></div>
      <p>${loremIpsum({ count: 3, format: 'html', units: 'paragraphs', random: Math.random })}</p>
    </div>`,
    )
    .join('');

const prepareData = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Navigation/Tabs',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedTabs = await Tabs(prepareData(demoData, args));
  return renderedTabs;
};
Default.storyName = 'as a navigational element';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = { notes: { markdown: notes, json: demoData } };

export const WithTabbedContent = (_, { loaded: { component } }) => component;

WithTabbedContent.render = async (args) => {
  const renderedTabs = await Tabs(prepareData(demoDtaWithContent, args));
  const contentHtml = prepareHtmlContent(demoDtaWithContent);
  const renderedStory = `
    <div class="ecl-container">
      ${renderedTabs}
      ${contentHtml}
    </div>`;

  return renderedStory;
};
WithTabbedContent.storyName = 'as tabbed interface';
WithTabbedContent.args = getArgs(demoDtaWithContent);
WithTabbedContent.argTypes = getArgTypes(demoDtaWithContent);
WithTabbedContent.parameters = {
  notes: { markdown: notes, json: demoDtaWithContent },
};

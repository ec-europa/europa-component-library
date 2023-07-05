import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefault from '@ecl/specs-composition-etrans/demo/data--default';
import dataNoLanguage from '@ecl/specs-composition-etrans/demo/data--no-languages';

import etransEc from './etrans-ec.html.twig';
import etransEu from './etrans-eu.html.twig';
import notes from './README.md';

const system = getSystem();
const etrans = system === 'eu' ? etransEu : etransEc;

const prepareData = (data, args) => {
  correctPaths(data);
  return Object.assign(data, args);
};

export default {
  title: 'Compositions/eTranslation',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedEtrans = await etrans(prepareData(dataDefault, args));
  return renderedEtrans;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const NoLanguage = (_, { loaded: { component } }) => component;

NoLanguage.render = async (args) => {
  const renderedEtransNoLanguage = await etrans(
    prepareData(dataNoLanguage, args)
  );
  return renderedEtransNoLanguage;
};
NoLanguage.storyName = 'no language list';
NoLanguage.parameters = { notes: { markdown: notes, json: dataNoLanguage } };

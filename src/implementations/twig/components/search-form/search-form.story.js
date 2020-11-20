import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-search-form/demo/data';
import searchForm from './search-form.html.twig';
import notes from './README.md';

const prepareSearchForm = (data) => {
  data.button.label = text(
    'button.label',
    data.button.label,
    tabLabels.required
  );
  data.button.icon.path = optionsKnob(
    'button.icon.path',
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
  title: 'Components/Forms/Search Form',
};

export const Default = () => searchForm(prepareSearchForm(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode];

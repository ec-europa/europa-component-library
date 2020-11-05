import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataLink from '@ecl/specs-component-tag/demo/data--link';
import dataRemovable from '@ecl/specs-component-tag/demo/data--removable';
import dataDisplay from '@ecl/specs-component-tag/demo/data--display';

import tag from './tag.html.twig';
import notes from './README.md';

// Preserve the adapted specs.
const prepareTag = (data, link, aria) => {
  data.tag.type = select(
    'tag.type',
    [data.tag.type],
    data.tag.type,
    tabLabels.required
  );
  data.tag.label = text('tag.label', data.tag.label, tabLabels.required);
  if (link) {
    data.tag.path = text('tag.path', data.tag.path, tabLabels.required);
  }
  if (aria) {
    data.tag.aria_label = text(
      'tag.aria_label',
      data.tag.aria_label,
      tabLabels.required
    );
  }
  if (aria) {
    data.default_icon_path = optionsKnob(
      'default_icon_path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Tag',
  decorators: [withKnobs, withNotes, withCode],
};

export const Display = () => tag(prepareTag(dataDisplay));

Display.storyName = 'display tag';
Display.parameters = { notes: { markdown: notes, json: dataDisplay } };

export const Link = () => tag(prepareTag(dataLink, true));

Link.storyName = 'link tag';
Link.parameters = { notes: { markdown: notes, json: dataLink } };

export const Removable = () => tag(prepareTag(dataRemovable, false, true));

Removable.storyName = 'removable tag';
Removable.parameters = { notes: { markdown: notes, json: dataRemovable } };

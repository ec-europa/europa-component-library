import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoDataDisplay from '@ecl/eu-specs-tag/demo/data--display';
import demoDataLink from '@ecl/eu-specs-tag/demo/data--link';
import demoDataRemovable from '@ecl/eu-specs-tag/demo/data--removable';

import Tag from '../src/Tag';

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
};

export const Display = () => (
  <Tag label={text('Label', demoDataDisplay.label)} variant="display" />
);

Display.story = {
  name: 'display tag',
};

export const Link = () => (
  <Tag
    label={text('Label', demoDataLink.label)}
    href={text('Link', demoDataLink.href)}
  />
);

Link.story = {
  name: 'link tag',
};

export const Removable = () => (
  <Tag
    label={text('Label', demoDataRemovable.label)}
    variant="removable"
    dismissButtonLabel={demoDataRemovable.dismissButtonLabel}
  />
);

Removable.story = {
  name: 'removable tag',
};

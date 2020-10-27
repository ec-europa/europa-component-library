import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoDataDisplay from '@ecl/ec-specs-tag/demo/data--display';
import demoDataLink from '@ecl/ec-specs-tag/demo/data--link';
import demoDataRemovable from '@ecl/ec-specs-tag/demo/data--removable';

import Tag from '../src/Tag';

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
};

export const Display = () => (
  <Tag label={text('Label', demoDataDisplay.label)} variant="display" />
);

Display.storyName = 'display tag';

export const Link = () => (
  <Tag
    label={text('Label', demoDataLink.label)}
    href={text('Link', demoDataLink.href)}
  />
);

Link.storyName = 'link tag';

export const Removable = () => (
  <Tag
    label={text('Label', demoDataRemovable.label)}
    variant="removable"
    dismissButtonLabel={demoDataRemovable.dismissButtonLabel}
  />
);

Removable.storyName = 'removable tag';

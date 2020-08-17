import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoDataLink from '@ecl/ec-specs-tag/demo/data--link';
import demoDataButton from '@ecl/ec-specs-tag/demo/data--button';
import demoDataRemovable from '@ecl/ec-specs-tag/demo/data--removable';

import Tag from '../src/Tag';

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
};

export const AsALink = () => (
  <Tag
    label={text('Label', demoDataLink.label)}
    href={text('Link', demoDataLink.href)}
  />
);

AsALink.story = {
  name: 'as a link',
};

export const AsAButton = () => (
  <Tag label={text('Label', demoDataButton.label)} type="button" />
);

AsAButton.story = {
  name: 'as a button',
};

export const Removable = () => (
  <Tag
    label={text('Label', demoDataRemovable.label)}
    variant="removable"
    dismissButtonLabel={demoDataRemovable.dismissButtonLabel}
  />
);

Removable.story = {
  name: 'removable',
};

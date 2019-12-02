/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoDataLink from '@ecl/eu-specs-tag/demo/data--link';
import demoDataButton from '@ecl/eu-specs-tag/demo/data--button';
import demoDataRemovable from '@ecl/eu-specs-tag/demo/data--removable';

import Tag from '../src/Tag';

storiesOf('Components|Tag', module)
  .addDecorator(withKnobs)
  .add('as a link', () => (
    <Tag
      label={text('Label', demoDataLink.label)}
      href={text('Link', demoDataLink.href)}
    />
  ))
  .add('as a button', () => (
    <Tag label={text('Label', demoDataButton.label)} type="button" />
  ))
  .add('removable', () => (
    <Tag
      label={text('Label', demoDataRemovable.label)}
      variant="removable"
      dismissButtonLabel={demoDataRemovable.dismissButtonLabel}
    />
  ));

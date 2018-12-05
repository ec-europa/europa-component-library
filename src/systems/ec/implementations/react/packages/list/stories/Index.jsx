/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentText from '@ecl/ec-specs-list/demo/data--text';
import demoContentLink from '@ecl/ec-specs-list/demo/data--link';
import demoContentBlockText from '@ecl/ec-specs-list/demo/data--block-text';
import demoContentBlockLink from '@ecl/ec-specs-list/demo/data--block-link';

import List from '../src/List';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('standard (text)', () => {
    const title = {
      ...demoContentText.title,
      label: text('Title', demoContentText.title.label),
    };

    return (
      <List
        {...demoContentText}
        title={title}
        hasBullet={boolean('Display bullets', true)}
        isOrdered={boolean('Ordered list', false)}
        hasSeparator={boolean('Separator list', false)}
      />
    );
  })
  .add('standard (link)', () => {
    const title = {
      ...demoContentLink.title,
      label: text('Title', demoContentLink.title.label),
    };

    return (
      <List
        {...demoContentLink}
        title={title}
        hasBullet={boolean('Display bullets', true)}
        isOrdered={boolean('Ordered list', false)}
        hasSeparator={boolean('Separator list', false)}
      />
    );
  })
  .add('standard (text block)', () => (
    <List
      {...demoContentBlockText}
      isOrdered={false}
      hasBullet={false}
      hasSeparator={false}
    />
  ))
  .add('standard (link block)', () => (
    <List
      {...demoContentBlockLink}
      isOrdered={false}
      hasBullet={false}
      hasSeparator={false}
    />
  ));

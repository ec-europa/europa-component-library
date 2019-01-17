/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContentText from '@ecl/ec-specs-list/demo/data--text';
import demoContentBlock from '@ecl/ec-specs-list/demo/data--block';
import demoContentNavigationBlock from '@ecl/ec-specs-list/demo/data--navigation-block';
import demoContentNavigationLink from '@ecl/ec-specs-list/demo/data--navigation-link';

import List from '../src/List';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('standard', () => {
    const title = {
      ...demoContentText.title,
      label: text(
        'Title',
        demoContentText.title ? demoContentText.title.label : ''
      ),
    };

    const orderedStyles = {
      Default: '',
      Call: 'call',
      Primary: 'primary',
    };

    return (
      <List
        {...demoContentText}
        title={title}
        hasBullet={boolean('Display bullets', true)}
        isOrdered={boolean('Ordered list', false)}
        orderedStyle={select('Ordered style', orderedStyles, '')}
        hasSeparator={boolean('Separator list', false)}
      />
    );
  })
  .add('text block', () => (
    <List
      {...demoContentBlock}
      isOrdered={false}
      hasBullet={false}
      hasSeparator={false}
    />
  ))
  .add('navigation block', () => (
    <List
      {...demoContentNavigationBlock}
      isOrdered={false}
      hasBullet={false}
      hasSeparator={false}
    />
  ))
  .add('navigation links', () => (
    <List
      {...demoContentNavigationLink}
      isOrdered={false}
      hasBullet={false}
      hasSeparator={false}
    />
  ));

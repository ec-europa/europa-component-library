/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContentNavigation from '@ecl/eu-specs-list/demo/data--navigation';

import ListNavigation from '../src/ListNavigation';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('navigation (text)', () => (
    <ListNavigation
      title={demoContentNavigation.title}
      description={demoContentNavigation.description}
    />
  ))
  .add('navigation (links)', () => (
    <ListNavigation
      title={demoContentNavigation.title}
      links={demoContentNavigation.links}
    />
  ));

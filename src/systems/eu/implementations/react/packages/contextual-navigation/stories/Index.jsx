/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import demoContent from '@ecl/eu-specs-contextual-navigation/demo/data';

import ContextualNavigation from '../ContextualNavigation';

storiesOf('Navigation/Contextual Navigation', module)
  .addDecorator(withKnobs)
  .add('default', () => <ContextualNavigation {...demoContent} />);

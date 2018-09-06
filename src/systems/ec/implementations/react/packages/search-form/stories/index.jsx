/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/ec-specs-search-form/demo/data';

import SearchForm from '../SearchForm';
import './index.scss';

storiesOf('SearchForm', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SearchForm
      textInputId={demoContent.textInputId}
      buttonLabel={text('Button label', demoContent.buttonLabel)}
    />
  ));

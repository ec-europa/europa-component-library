/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-search-form/demo/data';

import SearchForm from '../SearchForm';

storiesOf('SearchForm', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SearchForm
      textInputId={demoContent.textInputId}
      inputLabel={text('Input label', demoContent.inputLabel)}
      buttonLabel={text('Button label', demoContent.buttonLabel)}
    />
  ));

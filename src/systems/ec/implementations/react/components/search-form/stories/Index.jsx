import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-search-form/demo/data';

import SearchForm from '../src/SearchForm';

export default {
  title: 'Components/Forms/SearchForm',
  decorators: [withKnobs],
};

export const Default = () => (
  <SearchForm
    textInputId={demoContent.textInputId}
    inputLabel={text('Input label', demoContent.inputLabel)}
    buttonLabel={text('Button label', demoContent.buttonLabel)}
  />
);

Default.story = {
  name: 'default',
};

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContentSingle from '@ecl/ec-specs-select/demo/data--single';
import demoContentMultiple from '@ecl/ec-specs-select/demo/data--multiple';

import Select from '../src/Select';

export default {
  title: 'Components/Forms/Select',
  decorators: [
    withKnobs,
    story => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={context => {
          if (context.components) {
            context.components.forEach(c => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Default = () => (
  <Select
    {...demoContentSingle}
    id="select-default"
    options={demoContentSingle.options}
    label={text('Label', demoContentSingle.label)}
    helperText={text('Helper text', demoContentSingle.helperText)}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentSingle.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentSingle.requiredText)}
    optionalText={text('Optional text', demoContentSingle.optionalText)}
    width={select(
      'Width',
      {
        small: 's',
        medium: 'm',
        large: 'l',
      },
      'm'
    )}
  />
);

Default.story = {
  name: 'default',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Multiple = () => (
  <Select
    {...demoContentMultiple}
    data-ecl-auto-init="Select"
    id="select-multiple"
    options={demoContentMultiple.options}
    label={text('Label', demoContentMultiple.label)}
    helperText={text('Helper text', demoContentMultiple.helperText)}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentMultiple.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentMultiple.requiredText)}
    optionalText={text('Optional text', demoContentMultiple.optionalText)}
    width={select(
      'Width',
      {
        small: 's',
        medium: 'm',
        large: 'l',
      },
      'm'
    )}
    multiplePlaceholder={text(
      'Placeholder (multiple)',
      demoContentMultiple.multiplePlaceholder
    )}
    multipleSearch
    text={text(
      'Search text (multiple)',
      demoContentMultiple.multipleSearchText
    )}
  />
);

Multiple.story = {
  name: 'multiple',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

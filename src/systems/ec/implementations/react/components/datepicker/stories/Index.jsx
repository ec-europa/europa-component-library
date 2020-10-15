import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-datepicker/demo/data';

import Datepicker from '../src/Datepicker';

export default {
  title: 'Components/Forms/Datepicker',

  decorators: [
    withKnobs,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Default = () => (
  <Datepicker
    {...demoContent}
    data-ecl-auto-init="Datepicker"
    id={demoContent.id}
    name={demoContent.name}
    label={text('Label', demoContent.label)}
    helperText={text('Helper text', demoContent.helperText)}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContent.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContent.requiredText)}
    optionalText={text('Optional text', demoContent.optionalText)}
  />
);

Default.storyName = 'default';

Default.parameters = {
  knobs: {
    escapeHTML: false,
  },
};

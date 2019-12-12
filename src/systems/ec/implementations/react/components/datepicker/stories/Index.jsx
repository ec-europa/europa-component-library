/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContentDefault from '@ecl/ec-specs-datepicker/demo/data--default';

import Datepicker from '../src/Datepicker';

storiesOf('Components|Forms/Datepicker', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        if (!window.ECL) return {};

        const components = window.ECL.autoInit();
        return { components };
      }}
      beforeUnmount={context => {
        if (context.components) {
          context.components.forEach(c => c.destroy());
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add(
    'default',
    () => (
      <Datepicker
        data-ecl-auto-init="Datepicker"
        id="example"
        label={text('Label', demoContentDefault.label)}
        helperText={text('Helper text', "This is the input's helper text.")}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', 'This is the error message')}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', '*')}
        optionalText={text('Optional text', ' (optional)')}
        width={select(
          'Width',
          {
            small: 's',
            medium: 'm',
            large: 'l',
          },
          demoContentDefault.width
        )}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );

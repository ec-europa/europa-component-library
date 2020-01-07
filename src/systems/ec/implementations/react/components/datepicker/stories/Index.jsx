/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-datepicker/demo/data';

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
        width={select(
          'Width',
          {
            small: 's',
            medium: 'm',
            large: 'l',
          },
          demoContent.width
        )}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('simple', () => {
  const label = text('Label', 'Button Label');
  const options = {
    default: 'Default',
    primary: 'Primary',
    secondary: 'Secondary',
    call: 'Call to action',
  };
  const defaultValue = 'default';

  const value = select('Type', options, defaultValue);

  return (
    <button
      className={`ecl-button ecl-button--${value}`}
      disabled={boolean('Disabled', false)}
    >
      {label}
    </button>
  );
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import demo from '@ecl/eu-specs-checkbox/demo/data';
import Checkbox from '../Checkbox';

storiesOf('Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = text('Label', demo.default.label);
    const helperText = text('helperText', demo.default.helperText);
    const id = text('id', demo.default.id);
    const name = text('name', demo.default.name);

    return (
      <Checkbox label={label} id={id} name={name} helperText={helperText} />
    );
  })
  .add('disabled', () => <Checkbox {...demo.disabled} />)
  .add('invalid', () => <Checkbox {...demo.invalid} />)
  .add('withoutLabel', () => <Checkbox {...demo.withoutLabel} />);

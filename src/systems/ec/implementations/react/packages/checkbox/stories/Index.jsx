/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import demo from '@ecl/ec-specs-checkbox/demo/data';
import Checkbox from '../Checkbox';

storiesOf('Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = text('Label', demo.default.label);
    const helperText = text('helperText', demo.default.helperText);
    const id = text('id', demo.default.id);

    return <Checkbox label={label} id={id} helperText={helperText} />;
  })
  .add('disabled', () => <Checkbox {...demo.disabled} />)
  .add('invalid', () => <Checkbox {...demo.invalid} />)
  .add('withoutLabel', () => <Checkbox {...demo.withoutLabel} />);

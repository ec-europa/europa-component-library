/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import demo from '@ecl/ec-specs-checkbox/demo/data';
import Checkbox from '../src/Checkbox';

storiesOf('Components|Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const helperText = text('Helper text', demo.default.helperText);
    const hideLabel = boolean('Hidden label', false);
    const id = text('id', demo.default.id);
    const invalid = boolean('Invalid', false);
    const invalidText = text('Error message', demo.default.invalidText);
    const label = text('Label', demo.default.label);
    const name = text('Name', demo.default.name);

    return (
      <Checkbox
        label={label}
        id={id}
        name={name}
        helperText={helperText}
        hideLabel={hideLabel}
        invalid={invalid}
        invalidText={invalidText}
      />
    );
  })
  .add('disabled', () => {
    const label = text('Label', demo.disabled.label);
    const hideLabel = boolean('Hidden Label', false);
    const helperText = text('Helper Text', demo.disabled.helperText);
    const invalid = boolean('Invalid', false);
    const invalidText = text('Error message', demo.disabled.invalidText);
    const id = text('id', demo.disabled.id);
    const name = text('Name', demo.disabled.name);

    return (
      <Checkbox
        label={label}
        id={id}
        name={name}
        helperText={helperText}
        hideLabel={hideLabel}
        invalid={invalid}
        invalidText={invalidText}
      />
    );
  })
  .add('invalid', () => {
    const label = text('Label', demo.invalid.label);
    const hideLabel = boolean('Hidden Label', false);
    const helperText = text('Helper text', demo.invalid.helperText);
    const invalid = boolean('Invalid', true);
    const invalidText = text('Error message', demo.invalid.invalidText);
    const id = text('Id', demo.invalid.id);
    const name = text('Name', demo.invalid.name);

    return (
      <Checkbox
        label={label}
        id={id}
        name={name}
        helperText={helperText}
        hideLabel={hideLabel}
        invalid={invalid}
        invalidText={invalidText}
      />
    );
  })
  .add('withoutLabel', () => {
    const label = text('Label', demo.withoutLabel.label);
    const hideLabel = boolean('Hidden Label', true);
    const helperText = text('Helper text', demo.withoutLabel.helperText);
    const invalid = boolean('Invalid', false);
    const invalidText = text('Error message', demo.withoutLabel.invalidText);
    const id = text('Id', demo.withoutLabel.id);
    const name = text('Name', demo.withoutLabel.name);

    return (
      <Checkbox
        label={label}
        id={id}
        name={name}
        helperText={helperText}
        hideLabel={hideLabel}
        invalid={invalid}
        invalidText={invalidText}
      />
    );
  });

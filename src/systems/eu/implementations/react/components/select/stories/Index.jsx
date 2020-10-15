import React, { useEffect } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContentSingle from '@ecl/eu-specs-select/demo/data--single';
import demoContentMultiple from '@ecl/eu-specs-select/demo/data--multiple';

import Select from '../src/Select';

export default {
  title: 'Components/Forms/Select',
  decorators: [withKnobs],
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

Default.storyName = 'default';

Default.parameters = {
  knobs: {
    escapeHTML: false,
  },
};

export const Multiple = () => {
  const defaultText = text(
    'Placeholder (multiple)',
    demoContentMultiple.multiplePlaceholder
  );
  const searchText = text(
    'Search text (multiple)',
    demoContentMultiple.multipleSearchText
  );
  const selectAllText = text(
    'Select all label (multiple)',
    demoContentMultiple.multipleAllText
  );
  const isDisabled = boolean('Disabled', false);
  const isRequired = boolean('Required', true);
  const isInvalid = boolean('Invalid', false);
  const width = select(
    'Width',
    {
      small: 's',
      medium: 'm',
      large: 'l',
    },
    'm'
  );

  useEffect(() => {
    if (!document || !window.ECL) return {};

    const instance = window.ECL.Select.autoInit(
      document.querySelector('[data-ecl-select-multiple]'),
      { defaultText, searchText, selectAllText }
    );

    return () => instance.destroy();
  }, [
    defaultText,
    searchText,
    selectAllText,
    isDisabled,
    isRequired,
    isInvalid,
    width,
  ]);

  return (
    <Select
      {...demoContentMultiple}
      id="select-multiple"
      options={demoContentMultiple.options}
      label={text('Label', demoContentMultiple.label)}
      helperText={text('Helper text', demoContentMultiple.helperText)}
      invalid={isInvalid}
      invalidText={text('Invalid text', demoContentMultiple.invalidText)}
      disabled={isDisabled}
      required={isRequired}
      requiredText={text('Required text', demoContentMultiple.requiredText)}
      optionalText={text('Optional text', demoContentMultiple.optionalText)}
      width={width}
      multiple
      data-ecl-select-default={defaultText}
      data-ecl-select-search={searchText}
      data-ecl-select-all={selectAllText}
      data-ecl-auto-init="Select"
    />
  );
};

Multiple.storyName = 'multiple';

Multiple.parameters = {
  knobs: {
    escapeHTML: false,
  },
};

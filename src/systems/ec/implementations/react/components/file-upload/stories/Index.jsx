/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import parse from 'html-react-parser';

import demoContentDefault from '@ecl/ec-specs-file-upload/demo/data--default';
import demoContentMultiple from '@ecl/ec-specs-file-upload/demo/data--multiple';

import FileUpload from '../src/FileUpload';

export default {
  title: 'Components|Forms/File upload',

  decorators: [
    withKnobs,
    story => (
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
    ),
  ],
};

export const Default = () => (
  <FileUpload
    {...demoContentDefault}
    data-ecl-auto-init="FileUpload"
    id="example-file-upload-default"
    label={text('Label', demoContentDefault.label)}
    helperText={parse(text('Helper text', demoContentDefault.helperText))}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentDefault.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentDefault.requiredText)}
    optionalText={text('Optional text', demoContentDefault.optionalText)}
    buttonChooseLabel={text(
      'Button choose label',
      demoContentDefault.buttonChooseLabel
    )}
    buttonReplaceLabel={text(
      'Button replace label',
      demoContentDefault.buttonReplaceLabel
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
  <FileUpload
    {...demoContentMultiple}
    data-ecl-auto-init="FileUpload"
    id="example-file-upload-multiple"
    label={text('Label', demoContentMultiple.label)}
    helperText={parse(text('Helper text', demoContentMultiple.helperText))}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentMultiple.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentMultiple.requiredText)}
    optionalText={text('Optional text', demoContentMultiple.optionalText)}
    buttonChooseLabel={text(
      'Button choose label',
      demoContentMultiple.buttonChooseLabel
    )}
    buttonReplaceLabel={text(
      'Button replace label',
      demoContentMultiple.buttonReplaceLabel
    )}
    multiple
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

export const Disabled = () => (
  <FileUpload
    {...demoContentDefault}
    data-ecl-auto-init="FileUpload"
    id="example-file-upload-disable"
    label={text('Label', demoContentDefault.label)}
    helperText={parse(text('Helper text', demoContentDefault.helperText))}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentDefault.invalidText)}
    disabled={boolean('Disabled', true)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentDefault.requiredText)}
    optionalText={text('Optional text', demoContentDefault.optionalText)}
    buttonChooseLabel={text(
      'Button choose label',
      demoContentDefault.buttonChooseLabel
    )}
    buttonReplaceLabel={text(
      'Button replace label',
      demoContentDefault.buttonReplaceLabel
    )}
  />
);

Disabled.story = {
  name: 'disabled',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Invalid = () => (
  <FileUpload
    {...demoContentDefault}
    data-ecl-auto-init="FileUpload"
    id="example-file-upload-invalid"
    label={text('Label', demoContentDefault.label)}
    helperText={parse(text('Helper text', demoContentDefault.helperText))}
    invalid={boolean('Invalid', true)}
    invalidText={text('Invalid text', demoContentDefault.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', demoContentDefault.requiredText)}
    optionalText={text('Optional text', demoContentDefault.optionalText)}
    buttonChooseLabel={text(
      'Button choose label',
      demoContentDefault.buttonChooseLabel
    )}
    buttonReplaceLabel={text(
      'Button replace label',
      demoContentDefault.buttonReplaceLabel
    )}
  />
);

Invalid.story = {
  name: 'invalid',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Optional = () => (
  <FileUpload
    {...demoContentDefault}
    data-ecl-auto-init="FileUpload"
    id="example-file-upload-invalid"
    label={text('Label', demoContentDefault.label)}
    helperText={parse(text('Helper text', demoContentDefault.helperText))}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentDefault.invalidText)}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', false)}
    requiredText={text('Required text', demoContentDefault.requiredText)}
    optionalText={text('Optional text', demoContentDefault.optionalText)}
    buttonChooseLabel={text(
      'Button choose label',
      demoContentDefault.buttonChooseLabel
    )}
    buttonReplaceLabel={text(
      'Button replace label',
      demoContentDefault.buttonReplaceLabel
    )}
  />
);

Optional.story = {
  name: 'optional',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

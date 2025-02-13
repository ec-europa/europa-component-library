import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';
import { getColorModeControls } from '@ecl/story-utils';

import demoContentHeading from './demo/data--heading';
import demoContentParagraph from './demo/data--paragraph';

const system = getSystem();

const getArgs = (data, story) => {
  const args = {};
  if (story === 'text-colour') {
    if (system === 'ec') {
      args.show_color_mode = false;
      args.color_mode = 'default';
      args.type_color_mode = 'on-surface';
    }

    args.colour = 'ecl-u-type-color-neutral-dark';
  }
  if (story === 'text-style') {
    args.bold = false;
    args.style = 'ecl-u-type-none';
    args.alignment = 'ecl-u-type-align-left';
  }

  args.content = data.content;

  return args;
};

const getArgTypes = (story) => {
  const argTypes = getColorModeControls({ arg: 'show_color_mode' });

  argTypes.content = {
    description: `Content`,
    type: 'string',
    control: {
      type: 'text',
    },
    table: {
      category: 'Content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  };

  if (story === 'text-colour') {
    if (system === 'ec') {
      argTypes.show_color_mode = {
        name: 'use color modes',
        type: 'boolean',
        description: 'Switch to color mode colors',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: true },
        },
      };

      argTypes.type_color_mode = {
        name: 'color mode typography',
        type: 'select',
        description: 'Select a color mode typography',
        options: [
          'on-surface',
          'on-surface-highlight',
          'on-surface-variant-1',
          'on-surface-variant-2',
        ],
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '' },
        },
        mapping: {
          'on-surface': 'on-surface',
          'on-surface-highlight': 'on-surface-highlight',
          'on-surface-variant-1': 'on-surface-variant-1',
          'on-surface-variant-2': 'on-surface-variant-2',
        },
        if: { arg: 'show_color_mode' },
      };
    }

    argTypes.colour = {
      name: 'Text color (sample)',
      description: 'Choose different colors',
      type: 'select',
      options: [
        'ecl-u-type-color-neutral-dark',
        'ecl-u-type-color-white ecl-u-bg-dark',
        'ecl-u-type-color-primary',
        'ecl-u-type-color-secondary ecl-u-bg-dark',
        'ecl-u-type-color-success',
        'ecl-u-type-color-error',
      ],
      control: {
        type: 'select',
        labels: {
          'ecl-u-type-color-neutral-dark': 'neutral-dark',
          'ecl-u-type-color-white ecl-u-bg-dark': 'white',
          'ecl-u-type-color-primary': 'primary',
          'ecl-u-type-color-secondary ecl-u-bg-dark': 'secondary',
          'ecl-u-type-color-success': 'success',
          'ecl-u-type-color-error': 'error',
        },
      },
      table: {
        category: 'Style',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      mapping: {
        'neutral-dark': 'ecl-u-type-color-neutral-dark',
        white: 'ecl-u-type-color-white ecl-u-bg-dark',
        primary: 'ecl-u-type-color-primary',
        secondary: 'ecl-u-type-color-secondary ecl-u-bg-dark',
        success: 'ecl-u-type-color-success',
        error: 'ecl-u-type-color-error',
      },
      if: { arg: 'show_color_mode', truthy: false },
    };
  } else if (story === 'text-style') {
    argTypes.bold = {
      name: 'Bold text',
      description: 'Set the text size to bold',
      type: 'boolean',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
      mapping: {
        0: false,
        1: true,
      },
    };
    argTypes.style = {
      name: 'Text style',
      description: 'Choose different text styles',
      type: 'select',
      options: [
        'ecl-u-type-none',
        'ecl-u-type-lowercase',
        'ecl-u-type-uppercase',
        'ecl-u-type-capitalize',
        'ecl-u-type-overline',
        'ecl-u-type-underline',
        'ecl-u-type-strike',
      ],
      control: {
        labels: {
          'ecl-u-type-none': 'default',
          'ecl-u-type-lowercase': 'lowercase',
          'ecl-u-type-uppercase': 'uppercase',
          'ecl-u-type-capitalize': 'capitalize',
          'ecl-u-type-overline': 'overline',
          'ecl-u-type-underline': 'underline',
          'ecl-u-type-strike': 'strike',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
      mapping: {
        default: 'ecl-u-type-none',
        lowercase: 'ecl-u-type-lowercase',
        uppercase: 'ecl-u-type-uppercase',
        capitalize: 'ecl-u-type-capitalize',
        overline: 'ecl-u-type-overline',
        underline: 'ecl-u-type-underline',
        strike: 'ecl-u-type-strike',
      },
    };
    argTypes.alignment = {
      name: 'Text alignment',
      description: 'Choose different text alignments',
      type: 'select',
      options: [
        'ecl-u-type-align-left',
        'ecl-u-type-align-right',
        'ecl-u-type-align-center',
      ],
      control: {
        type: 'select',
        labels: {
          'ecl-u-type-align-left': 'left',
          'ecl-u-type-align-right': 'right',
          'ecl-u-type-align-center': 'center',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
      mapping: {
        left: 'ecl-u-type-align-left',
        right: 'ecl-u-type-align-right',
        center: 'ecl-u-type-align-center',
      },
    };
  }

  return argTypes;
};

export default {
  title: 'Utilities/Typography',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

export const Paragraph = (args) => `
    <h3 class="ecl-u-type-heading-3">Lead paragraph</h3>
    <p class="ecl-u-type-paragraph-lead">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Medium paragraph</h3>
    <p class="ecl-u-type-paragraph-m">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Small paragraph</h3>
    <p class="ecl-u-type-paragraph-s">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Extra small paragraph</h3>
    <p class="ecl-u-type-paragraph-xs">${args.content}</p>
  `;

Paragraph.storyName = 'paragraph';
Paragraph.args = getArgs(demoContentParagraph, 'paragraph');
Paragraph.argTypes = getArgTypes('paragraph');

export const Heading = (args) => `
    <h1 class="ecl-u-type-heading-1">H1. ${args.content}</h1>
    <h2 class="ecl-u-type-heading-2">H2. ${args.content}</h2>
    <h3 class="ecl-u-type-heading-3">H3. ${args.content}</h3>
    <h4 class="ecl-u-type-heading-4">H4. ${args.content}</h4>
    <h5 class="ecl-u-type-heading-5">H5. ${args.content}</h5>
    <h6 class="ecl-u-type-heading-6">H6. ${args.content}</h6>
  `;

Heading.storyName = 'heading';
Heading.args = getArgs(demoContentHeading, 'heading');
Heading.argTypes = getArgTypes('heading');

export const TextColour = (args) => `
    <p class="${classnames('ecl-u-type-paragraph-m', args.colour, {
      [`ecl-color-mode--${args.color_mode}`]:
        args.show_color_mode && args.color_mode !== 'default',
      [`ecl-u-type-color-${args.type_color_mode}`]: args.show_color_mode,
    })}">
      ${args.content}
    </p>
  `;

TextColour.storyName = 'text colour';
TextColour.args = getArgs(demoContentParagraph, 'text-colour');
TextColour.argTypes = getArgTypes('text-colour');

export const TextStyle = (args) => `
      <p
        class="${classnames(
          'ecl-u-type-paragraph-m',
          args.style,
          args.alignment,
          {
            [`ecl-u-type-bold`]: args.bold,
          },
        )}"
      >
        ${args.content}
      </p>
  `;

TextStyle.storyName = 'text style';
TextStyle.args = getArgs(demoContentParagraph, 'text-style');
TextStyle.argTypes = getArgTypes('text-style');

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

    args.colour = 'ecl-u-type-color-primary';
  }
  if (story === 'text-style') {
    args.size = 'ecl-u-type-m';
    args.weight = 'ecl-u-type-weight-regular';
    args.style = 'ecl-u-type-none';
    args.alignment = 'ecl-u-type-align-left';
  }

  args.content = data.content;

  return args;
};

const getArgTypes = (story) => {
  const argTypes = getColorModeControls({ arg: 'show_color_mode' });

  argTypes.content = {
    description: 'Content',
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
        'ecl-u-type-color-white ecl-u-bg-black',
        'ecl-u-type-color-primary',
        'ecl-u-type-color-secondary ecl-u-bg-black',
        'ecl-u-type-color-success',
        'ecl-u-type-color-error',
      ],
      control: {
        type: 'select',
        labels: {
          'ecl-u-type-color-white ecl-u-bg-black': 'white',
          'ecl-u-type-color-primary': 'primary',
          'ecl-u-type-color-secondary ecl-u-bg-black': 'secondary',
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
        white: 'ecl-u-type-color-white ecl-u-bg-black',
        primary: 'ecl-u-type-color-primary',
        secondary: 'ecl-u-type-color-secondary ecl-u-bg-black',
        success: 'ecl-u-type-color-success',
        error: 'ecl-u-type-color-error',
      },
      if: { arg: 'show_color_mode', truthy: false },
    };
  } else if (story === 'text-style') {
    argTypes.size = {
      name: 'Font size',
      description: 'Choose different font sizes',
      type: 'select',
      options:
        system === 'ec'
          ? [
              'ecl-u-type-xs',
              'ecl-u-type-s',
              'ecl-u-type-m',
              'ecl-u-type-l',
              'ecl-u-type-xl',
              'ecl-u-type-2xl',
              'ecl-u-type-3xl',
              'ecl-u-type-4xl',
              'ecl-u-type-5xl',
              'ecl-u-type-6xl',
              'ecl-u-type-7xl',
              'ecl-u-type-8xl',
              'ecl-u-type-9xl',
              'ecl-u-type-10xl',
            ]
          : [
              'ecl-u-type-xs',
              'ecl-u-type-s',
              'ecl-u-type-m',
              'ecl-u-type-l',
              'ecl-u-type-xl',
              'ecl-u-type-2xl',
              'ecl-u-type-3xl',
              'ecl-u-type-4xl',
              'ecl-u-type-5xl',
            ],
      control: {
        labels: {
          'ecl-u-type-xs': 'xs',
          'ecl-u-type-s': 's',
          'ecl-u-type-m': 'm',
          'ecl-u-type-l': 'l',
          'ecl-u-type-xl': 'xl',
          'ecl-u-type-2xl': '2xl',
          'ecl-u-type-3xl': '3xl',
          'ecl-u-type-4xl': '4xl',
          'ecl-u-type-5xl': '5xl',
          'ecl-u-type-6xl': '6xl',
          'ecl-u-type-7xl': '7xl',
          'ecl-u-type-8xl': '8xl',
          'ecl-u-type-9xl': '9xl',
          'ecl-u-type-10xl': '10xl',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
      mapping: {
        xs: 'ecl-u-type-xs',
        s: 'ecl-u-type-s',
        m: 'ecl-u-type-m',
        l: 'ecl-u-type-l',
        xl: 'ecl-u-type-xl',
        '2xl': 'ecl-u-type-2xl',
        '3xl': 'ecl-u-type-3xl',
        '4xl': 'ecl-u-type-4xl',
        '5xl': 'ecl-u-type-5xl',
        '6xl': 'ecl-u-type-6xl',
        '7xl': 'ecl-u-type-7xl',
        '8xl': 'ecl-u-type-8xl',
        '9xl': 'ecl-u-type-9xl',
        '10xl': 'ecl-u-type-10xl',
      },
    };
    argTypes.weight = {
      name: 'Font weight',
      description: 'Choose different font weights',
      type: 'select',
      options:
        system === 'ec'
          ? [
              'ecl-u-type-weight-thin',
              'ecl-u-type-weight-extra-light',
              'ecl-u-type-weight-light',
              'ecl-u-type-weight-regular',
              'ecl-u-type-weight-medium',
              'ecl-u-type-weight-semi-bold',
              'ecl-u-type-weight-bold',
              'ecl-u-type-weight-extra-bold',
              'ecl-u-type-weight-black',
            ]
          : ['ecl-u-type-weight-regular', 'ecl-u-type-weight-bold'],
      control: {
        labels: {
          'ecl-u-type-weight-thin': 'thin',
          'ecl-u-type-weight-extra-light': 'extra light',
          'ecl-u-type-weight-light': 'light',
          'ecl-u-type-weight-regular': 'regular',
          'ecl-u-type-weight-medium': 'medium',
          'ecl-u-type-weight-semi-bold': 'semi bold',
          'ecl-u-type-weight-bold': 'bold',
          'ecl-u-type-weight-extra-bold': 'extra-bold',
          'ecl-u-type-weight-black': 'black',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
      mapping: {
        thin: 'ecl-u-type-weight-thin',
        'extra light': 'ecl-u-type-weight-extra-light',
        light: 'ecl-u-type-weight-light',
        regular: 'ecl-u-type-weight-regular',
        medium: 'ecl-u-type-weight-medium',
        'semi bold': 'ecl-u-type-weight-semi-bold',
        bold: 'ecl-u-type-weight-bold',
        'extra bold': 'ecl-u-type-weight-extra-bold',
        black: 'ecl-u-type-weight-black',
      },
    };
    argTypes.style = {
      name: 'Text style',
      description: 'Choose different text styles',
      type: 'select',
      options: [
        'ecl-u-type-none',
        'ecl-u-type-italic',
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
          'ecl-u-type-italic': 'italic',
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
        italic: 'ecl-u-type-italic',
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

export const Heading = (args) => {
  if (system === 'ec') {
    return `
    <div class="ecl-u-type-display">Display. ${args.content}</div>
    <h1 class="ecl-u-type-heading-1">H1. ${args.content}</h1>
    <h2 class="ecl-u-type-heading-2">H2. ${args.content}</h2>
    <h3 class="ecl-u-type-heading-3">H3. ${args.content}</h3>
    <h4 class="ecl-u-type-heading-4">H4. ${args.content}</h4>
    <h5 class="ecl-u-type-heading-5">H5. ${args.content}</h5>
    <h6 class="ecl-u-type-heading-6">H6. ${args.content}</h6>
  `;
  }

  return `
    <h1 class="ecl-u-type-heading-1">H1. ${args.content}</h1>
    <h2 class="ecl-u-type-heading-2">H2. ${args.content}</h2>
    <h3 class="ecl-u-type-heading-3">H3. ${args.content}</h3>
    <h4 class="ecl-u-type-heading-4">H4. ${args.content}</h4>
    <h5 class="ecl-u-type-heading-5">H5. ${args.content}</h5>
    <h6 class="ecl-u-type-heading-6">H6. ${args.content}</h6>
  `;
};
Heading.storyName = 'heading';
Heading.args = getArgs(demoContentHeading, 'heading');
Heading.argTypes = getArgTypes('heading');

export const Paragraph = (args) => {
  if (system === 'ec') {
    return `
      <h3 class="ecl-u-type-heading-3">Paragraph 2xl</h3>
      <p class="ecl-u-type-paragraph-2xl">${args.content}</p>
      <h3 class="ecl-u-type-heading-3">Paragraph xl (lead)</h3>
      <p class="ecl-u-type-paragraph-xl">${args.content}</p>
      <h3 class="ecl-u-type-heading-3">Paragraph l</h3>
      <p class="ecl-u-type-paragraph-l">${args.content}</p>
      <h3 class="ecl-u-type-heading-3">Paragraph m (default)</h3>
      <p class="ecl-u-type-paragraph-m">${args.content}</p>
      <h3 class="ecl-u-type-heading-3">Paragraph s</h3>
      <p class="ecl-u-type-paragraph-s">${args.content}</p>
      <h3 class="ecl-u-type-heading-3">Paragraph xs</h3>
      <p class="ecl-u-type-paragraph-xs">${args.content}</p>
    `;
  }

  return `
    <h3 class="ecl-u-type-heading-3">Lead paragraph</h3>
    <p class="ecl-u-type-paragraph-lead">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Medium paragraph</h3>
    <p class="ecl-u-type-paragraph-m">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Small paragraph</h3>
    <p class="ecl-u-type-paragraph-s">${args.content}</p>
    <h3 class="ecl-u-type-heading-3">Extra small paragraph</h3>
    <p class="ecl-u-type-paragraph-xs">${args.content}</p>
  `;
};

Paragraph.storyName = 'paragraph';
Paragraph.args = getArgs(demoContentParagraph, 'paragraph');
Paragraph.argTypes = getArgTypes('paragraph');

export const Microcopy = (args) => {
  if (system === 'ec') {
    return `
    <div class="ecl-u-type-microcopy-m">Microcopy M. ${args.content}</div>
    <div class="ecl-u-type-microcopy-s ecl-u-mt-m">Microcopy S. ${args.content}</div>
    <div class="ecl-u-type-microcopy-xs ecl-u-mt-m">Microcopy XS. ${args.content}</div>
    <div class="ecl-u-type-microcopy-2xs ecl-u-mt-m">Microcopy 2XS. ${args.content}</div>
  `;
  }

  return `
    No microcopy style available in EU
  `;
};
Microcopy.storyName = 'microcopy';
Microcopy.args = getArgs(demoContentParagraph, 'microcopy');
Microcopy.argTypes = getArgTypes('microcopy');

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
      <div
        class="${classnames(
          args.size,
          args.weight,
          args.style,
          args.alignment,
        )}"
      >
        ${args.content}
      </div>
  `;

TextStyle.storyName = 'text style';
TextStyle.args = getArgs(demoContentParagraph, 'text-style');
TextStyle.argTypes = getArgTypes('text-style');

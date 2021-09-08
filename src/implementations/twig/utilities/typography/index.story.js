import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';

import demoContentHeading from '@ecl/specs-utils-typography/demo/data--heading';
import demoContentParagraph from '@ecl/specs-utils-typography/demo/data--paragraph';

const getArgs = (data, story) => {
  const args = {
    content: data.content,
  };
  if (story === 'text-colour') {
    args.colour = 'ecl-u-type-color-black';
  }
  if (story === 'text-style') {
    args.bold = false;
    args.style = 'ecl-u-type-none';
    args.alignment = 'ecl-u-type-align-left';
  }

  return args;
};

const getArgTypes = (story) => {
  const argTypes = {
    content: {
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
    },
  };

  if (story === 'text-colour') {
    argTypes.colour = {
      name: 'Text colour (sample)',
      description: 'Choose different colours',
      type: 'select',
      options: [
        'ecl-u-type-color-black',
        'ecl-u-type-color-white ecl-u-bg-grey',
        'ecl-u-type-color-grey',
        'ecl-u-type-color-blue-120',
        'ecl-u-type-color-grey-50',
        'ecl-u-type-color-blue-n',
        'ecl-u-type-color-red',
        'ecl-u-type-color-orange',
        'ecl-u-type-color-green',
      ],
      control: {
        type: 'select',
        labels: {
          'ecl-u-type-color-black': 'Black',
          'ecl-u-type-color-white ecl-u-bg-grey': 'White',
          'ecl-u-type-color-grey': 'Grey',
          'ecl-u-type-color-blue-120': 'Blue 120',
          'ecl-u-type-color-grey-50': 'Grey 50',
          'ecl-u-type-color-blue-n': 'Blue N',
          'ecl-u-type-color-red': 'Red',
          'ecl-u-type-color-orange': 'Orange',
          'ecl-u-type-color-green': 'Green',
        },
      },
      table: {
        category: 'Style',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
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
          'ecl-u-type-none': 'Default',
          'ecl-u-type-lowercase': 'Lowercase',
          'ecl-u-type-uppercase': 'Uppercase',
          'ecl-u-type-capitalize': 'Capitalize',
          'ecl-u-type-overline': 'Overline',
          'ecl-u-type-underline': 'Underline',
          'ecl-u-type-strike': 'Strike',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
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
          'ecl-u-type-align-left': 'Left',
          'ecl-u-type-align-right': 'Right',
          'ecl-u-type-align-center': 'Center',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Styles',
      },
    };
  }

  return argTypes;
};

export default {
  title: 'Utilities/Typography',
  decorators: [withCode],
};

export const Paragraph = (args) => `
    <h2 class="ecl-u-type-heading-2">Lead paragraph</h2>
    <p class="ecl-u-type-paragraph-lead">${args.content}</p>
    <h2 class="ecl-u-type-heading-2">Medium paragraph</h2>
    <p class="ecl-u-type-paragraph-m">${args.content}</p>
    <h2 class="ecl-u-type-heading-2">Small paragraph</h2>
    <p class="ecl-u-type-paragraph-s">${args.content}</p>
    <h2 class="ecl-u-type-heading-2">Extra small paragraph</h2>
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
    <p class="${classnames('ecl-u-type-paragraph-m', args.colour)}">
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
          }
        )}"
      >
        ${args.content}
      </p>
  `;

TextStyle.storyName = 'text style';
TextStyle.args = getArgs(demoContentParagraph, 'text-style');
TextStyle.argTypes = getArgTypes('text-style');

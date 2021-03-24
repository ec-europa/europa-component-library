import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';

import demoContentHeading from '@ecl/specs-utils-typography/demo/data--heading';
import demoContentParagraph from '@ecl/specs-utils-typography/demo/data--paragraph';

const getArgTypes = (data, story) => {
  const argTypes = {
    content: {
      description: `Content`,
      defaultValue: data.content,
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
      defaultValue: 'ecl-u-type-color-black',
      control: {
        type: 'select',
        options: {
          Black: 'ecl-u-type-color-black',
          White: 'ecl-u-type-color-white ecl-u-bg-grey',
          Grey: 'ecl-u-type-color-grey',
          'Blue 120': 'ecl-u-type-color-blue-120',
          'Grey 50': 'ecl-u-type-color-grey-50',
          'Blue N': 'ecl-u-type-color-blue-n',
          Red: 'ecl-u-type-color-red',
          Orange: 'ecl-u-type-color-orange',
          Green: 'ecl-u-type-color-green',
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
      defaultValue: false,
      control: {
        type: 'boolean',
      },
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
      defaultValue: 'ecl-u-type-none',
      control: {
        type: 'select',
        options: {
          Default: 'ecl-u-type-none',
          Lowercase: 'ecl-u-type-lowercase',
          Uppercase: 'ecl-u-type-uppercase',
          Capitalize: 'ecl-u-type-capitalize',
          Overline: 'ecl-u-type-overline',
          Underline: 'ecl-u-type-underline',
          Strike: 'ecl-u-type-strike',
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
Paragraph.argTypes = getArgTypes(demoContentParagraph, 'paragraph');

export const Heading = (args) => `
    <h1 class="ecl-u-type-heading-1">H1. ${args.content}</h1>
    <h2 class="ecl-u-type-heading-2">H2. ${args.content}</h2>
    <h3 class="ecl-u-type-heading-3">H3. ${args.content}</h3>
    <h4 class="ecl-u-type-heading-4">H4. ${args.content}</h4>
    <h5 class="ecl-u-type-heading-5">H5. ${args.content}</h5>
  `;

Heading.storyName = 'heading';
Heading.argTypes = getArgTypes(demoContentHeading, 'heading');

export const TextColour = (args) => `
    <p class="${classnames('ecl-u-type-paragraph-m', args.colour)}">
      ${args.content}
    </p>
  `;

TextColour.storyName = 'text colour';
TextColour.argTypes = getArgTypes(demoContentParagraph, 'text-colour');

export const TextStyle = (args) => `
      <p
        class="${classnames('ecl-u-type-paragraph-m', args.style, {
          [`ecl-u-type-bold`]: args.bold,
        })}"
      >
        ${args.content}
      </p>
  `;

TextStyle.storyName = 'text style';
TextStyle.argTypes = getArgTypes(demoContentParagraph, 'text-style');

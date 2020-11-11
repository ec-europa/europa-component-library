import classnames from 'classnames';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import demoContentHeading from '@ecl/specs-utils-typography/demo/data--heading';
import demoContentParagraph from '@ecl/specs-utils-typography/demo/data--paragraph';

export default {
  title: 'Utilities/Typography',
  decorators: [withKnobs],
};

export const Paragraph = () => {
  const content = text('Content', demoContentParagraph.content);

  return `
    <h2 class="ecl-u-type-heading-2">Lead paragraph</h2>
    <p class="ecl-u-type-paragraph-lead">${content}</p>

    <h2 class="ecl-u-type-heading-2">Medium paragraph</h2>
    <p class="ecl-u-type-paragraph-m">${content}</p>

    <h2 class="ecl-u-type-heading-2">Small paragraph</h2>
    <p class="ecl-u-type-paragraph-s">${content}</p>

    <h2 class="ecl-u-type-heading-2">Extra small paragraph</h2>
    <p class="ecl-u-type-paragraph-xs">${content}</p>
  `;
};

Paragraph.storyName = 'paragraph';

export const Heading = () => {
  const content = text('Content', demoContentHeading.content);

  return `
    <h1 class="ecl-u-type-heading-1">H1. ${content}</h1>
    <h2 class="ecl-u-type-heading-2">H2. ${content}</h2>
    <h3 class="ecl-u-type-heading-3">H3. ${content}</h3>
    <h4 class="ecl-u-type-heading-4">H4. ${content}</h4>
    <h5 class="ecl-u-type-heading-5">H5. ${content}</h5>
  `;
};

Heading.storyName = 'heading';

export const TextColour = () => {
  const colour = select(
    'Text colour (sample)',
    {
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
    'ecl-u-type-color-black'
  );

  return `
    <p class="${classnames('ecl-u-type-paragraph-m', colour)}">
      ${demoContentParagraph.content}
    </p>
  `;
};

TextColour.storyName = 'text colour';

export const TextStyle = () => {
  const bold = boolean('Bold text', false);
  const style = select(
    'Text style',
    {
      Default: 'ecl-u-type-none',
      Lowercase: 'ecl-u-type-lowercase',
      Uppercase: 'ecl-u-type-uppercase',
      Capitalize: 'ecl-u-type-capitalize',
      Overline: 'ecl-u-type-overline',
      Underline: 'ecl-u-type-underline',
      Strike: 'ecl-u-type-strike',
    },
    'ecl-u-type-none'
  );

  return `
      <p
        class="${classnames('ecl-u-type-paragraph-m', style, {
          [`ecl-u-type-bold`]: bold,
        })}"
      >
        ${demoContentParagraph.content}
      </p>
  `;
};

TextStyle.storyName = 'text style';

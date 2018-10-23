/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentParagraph from '@ecl/eu-specs-typography/demo/data--paragraph';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('paragraph', () => (
    <p
      className={
        boolean('Lead paragraph')
          ? 'ecl-u-type-paragraph-lead'
          : 'ecl-u-type-paragraph'
      }
    >
      {text('Content', demoContentParagraph.content)}
    </p>
  ));

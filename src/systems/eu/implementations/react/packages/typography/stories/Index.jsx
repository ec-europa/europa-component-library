/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import demoContentParagraph from '@ecl/eu-specs-typography/demo/data--paragraph';

const paragraphClasses = {
  Lead: 'ecl-u-type-paragraph-lead',
  Medium: 'ecl-u-type-paragraph-m',
  Small: 'ecl-u-type-paragraph-s',
  'Extra small': 'ecl-u-type-paragraph-xs',
};

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('paragraph', () => (
    <p className={select('Size', paragraphClasses, 'ecl-u-type-paragraph-m')}>
      {text('Content', demoContentParagraph.content)}
    </p>
  ));

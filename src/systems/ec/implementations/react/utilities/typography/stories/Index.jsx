/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContentHeading from '@ecl/ec-specs-typography/demo/data--heading';
import demoContentParagraph from '@ecl/ec-specs-typography/demo/data--paragraph';

storiesOf('Utilities|Typography', module)
  .addDecorator(withKnobs)
  .add('paragraph', () => {
    const content = text('Content', demoContentParagraph.content);

    return (
      <Fragment>
        <h2 className="ecl-u-type-heading-2">Lead paragraph</h2>
        <p className="ecl-u-type-paragraph-lead">{content}</p>

        <h2 className="ecl-u-type-heading-2">Medium paragraph</h2>
        <p className="ecl-u-type-paragraph-m">{content}</p>

        <h2 className="ecl-u-type-heading-2">Small paragraph</h2>
        <p className="ecl-u-type-paragraph-s">{content}</p>

        <h2 className="ecl-u-type-heading-2">Extra small paragraph</h2>
        <p className="ecl-u-type-paragraph-xs">{content}</p>
      </Fragment>
    );
  })
  .add('heading', () => {
    const content = text('Content', demoContentHeading.content);

    return (
      <Fragment>
        <h1 className="ecl-u-type-heading-1">H1. {content}</h1>
        <h2 className="ecl-u-type-heading-2">H2. {content}</h2>
        <h3 className="ecl-u-type-heading-3">H3. {content}</h3>
        <h4 className="ecl-u-type-heading-4">H4. {content}</h4>
      </Fragment>
    );
  });

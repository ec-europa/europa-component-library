/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

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
        <h5 className="ecl-u-type-heading-5">H4. {content}</h5>
      </Fragment>
    );
  })
  .add('text colour', () => {
    const colour = select(
      'Text colour (sample)',
      {
        Black: 'ecl-u-type-color-black-100',
        Primary: 'ecl-u-type-color-primary',
        Shade: 'ecl-u-type-color-shade',
        'Grey 50': 'ecl-u-type-color-grey-50',
        'Blue 120': 'ecl-u-type-color-blue-120',
        Success: 'ecl-u-type-color-success',
        Error: 'ecl-u-type-color-error',
        White: 'ecl-u-type-color-white-100 ecl-u-bg-shade',
      },
      'ecl-u-type-color-black-100'
    );

    return (
      <Fragment>
        <p className={classnames('ecl-u-type-paragraph-m', colour)}>
          {demoContentParagraph.content}
        </p>
      </Fragment>
    );
  })
  .add('text style', () => {
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

    return (
      <Fragment>
        <p
          className={classnames('ecl-u-type-paragraph-m', style, {
            [`ecl-u-type-bold`]: bold,
          })}
        >
          {demoContentParagraph.content}
        </p>
      </Fragment>
    );
  });

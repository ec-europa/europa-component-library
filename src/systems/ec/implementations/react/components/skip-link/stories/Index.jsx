/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';

import demoData from '@ecl/ec-specs-skip-link/demo/data';
import { SkipLink } from '../src/SkipLink';

storiesOf('Components|Navigation/Skip link', module)
  .addDecorator(withKnobs)
  .addDecorator(withCssResources)
  .addParameters({
    cssresources: [
      {
        id: 'ecl-legacy-screen',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-legacy-website.css" />`,
        picked: true,
      },
      {
        id: 'ecl-legacy-print',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-legacy-website-print.css" />`,
        picked: false,
      },
      {
        id: 'test-fake-global-rules',
        code: `
  <style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    color: red;
    font-family: serif;
    font-weight: 700;
    line-height: 2;
  }
  </style>`,
        picked: false,
      },
    ],
  })
  .add('default', () => {
    return (
      <Fragment>
        <SkipLink href={demoData.href} label={text('Label', demoData.label)} />
        <div id={demoData.href.replace('#', '')} />
      </Fragment>
    );
  });

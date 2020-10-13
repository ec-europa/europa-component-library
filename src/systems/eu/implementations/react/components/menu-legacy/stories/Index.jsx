import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/eu-specs-menu-legacy/demo/data';

import { MenuLegacy } from '../src/MenuLegacy';

storiesOf('Components/Navigation/Menu (legacy)', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <StoryWrapper
      afterMount={() => {
        if (!window.ECL) return {};

        const autoinit = window.ECL.autoInit();
        return { components: autoinit.components };
      }}
      beforeUnmount={(context) => {
        if (context.components) {
          context.components.forEach((c) => c.destroy());
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .addDecorator(withCssResources)
  .addParameters({
    cssresources: [
      {
        id: 'ecl-legacy-screen',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-eu-preset-legacy-website.css" />`,
        picked: true,
      },
      {
        id: 'ecl-legacy-print',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-eu-preset-legacy-website-print.css" />`,
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
  .add('default', () => (
    <MenuLegacy {...demoContent} data-ecl-auto-init="MenuLegacy" />
  ));

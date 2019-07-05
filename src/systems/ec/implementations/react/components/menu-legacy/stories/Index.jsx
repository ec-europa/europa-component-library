/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withCssResources } from '@storybook/addon-cssresources';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-menu-legacy/demo/data';

import VanillaMenuLegacy from '@ecl/ec-component-menu-legacy';

import MenuLegacy from '../src/MenuLegacy';

storiesOf('Components|Navigation/Menu (legacy)', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-menu-legacy]');
        const vanillaMenuLegacy = new VanillaMenuLegacy(element);
        vanillaMenuLegacy.init();

        // Return new context
        return { vanillaMenuLegacy };
      }}
      beforeUnmount={context => {
        if (context.vanillaMenuLegacy) {
          context.vanillaMenuLegacy.destroy();
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
  .add('default', () => <MenuLegacy {...demoContent} />);

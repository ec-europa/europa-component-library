import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-accordion/demo/data';

import { Accordion } from '../src/Accordion';
import { AccordionItem } from '../src/AccordionItem';

export default {
  title: 'Deprecated/Accordion (ECL<2-6-0)',

  decorators: [
    withKnobs,
    (story) => (
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
    ),
    withCssResources,
  ],

  parameters: {
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
  },
};

export function DefaultEcl260() {
  const toggle1 = {
    ...demoContent.items[0].toggle,
    label: text('Toggle 1', demoContent.items[0].toggle.label),
  };

  const toggle2 = {
    ...demoContent.items[1].toggle,
    label: text('Toggle 2', demoContent.items[1].toggle.label),
  };

  const toggle3 = {
    ...demoContent.items[2].toggle,
    label: text('Toggle 3', demoContent.items[2].toggle.label),
  };

  return (
    <Accordion data-ecl-auto-init="Accordion">
      <AccordionItem
        toggle={toggle1}
        id={demoContent.items[0].id}
        level={demoContent.items[0].level}
      >
        {text('Content 1', demoContent.items[0].content)}
      </AccordionItem>
      <AccordionItem
        toggle={toggle2}
        id={demoContent.items[1].id}
        level={demoContent.items[1].level}
      >
        {text('Content 2', demoContent.items[1].content)}
      </AccordionItem>
      <AccordionItem
        toggle={toggle3}
        id={demoContent.items[2].id}
        level={demoContent.items[2].level}
      >
        {text('Content 3', demoContent.items[2].content)}
      </AccordionItem>
    </Accordion>
  );
}

DefaultEcl260.storyName = 'default (ECL <2.6.0)';

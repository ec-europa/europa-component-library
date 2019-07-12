/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, button } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import StoryWrapper from '@ecl/story-wrapper';
import { LoremIpsum } from 'lorem-ipsum';
import VanillaTimeline from '@ecl/ec-component-timeline';

import TimelineExample from '../examples/Timeline';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

storiesOf('Components|Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-timeline]');
        const vanillaTimeline = new VanillaTimeline(element);
        vanillaTimeline.init();

        // Return new context
        return { vanillaTimeline };
      }}
      beforeUnmount={context => {
        if (context.vanillaTimeline) {
          context.vanillaTimeline.destroy();
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
  .add('[deprecated] ECL <2.5.0', () => {
    const btnAddContent = () => {
      const root = document.querySelector('#root > div');
      for (let i = 0; i < 7; i += 1) {
        const dummyContent = document.createElement('p');
        dummyContent.classList.add('ecl-u-type-paragraph');
        dummyContent.innerHTML = lorem.generateParagraphs(1);
        /* eslint-disable-next-line unicorn/prefer-node-append */
        root.appendChild(dummyContent);
      }
    };

    button('Add dummy content', btnAddContent, 'buttons');

    return <TimelineExample />;
  });

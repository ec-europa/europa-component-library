/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, button } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import { LoremIpsum } from 'lorem-ipsum';
import VanillaTimeline from '@ecl/eu-component-timeline2';

import TimelineExample from '../examples/Timeline2';

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
  .add('default', () => {
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

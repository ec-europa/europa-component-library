import React from 'react';
import { withKnobs, button } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import { LoremIpsum } from 'lorem-ipsum';

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

const btnAddContent = () => {
  const root = document.querySelector('#root > div');
  for (let i = 0; i < 7; i += 1) {
    const dummyContent = document.createElement('p');
    dummyContent.classList.add('ecl-u-type-paragraph');
    dummyContent.innerHTML = lorem.generateParagraphs(1);
    root.appendChild(dummyContent);
  }
};

export default {
  title: 'Components/Timeline',

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
  ],
};

export const Default = () => {
  button('Add dummy content', btnAddContent, 'buttons');

  return <TimelineExample />;
};

Default.storyName = 'default';

export * from '../../timeline/stories/Index';

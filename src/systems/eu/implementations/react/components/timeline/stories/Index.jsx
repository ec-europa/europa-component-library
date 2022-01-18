import React from 'react';
import { withKnobs, button } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import StoryWrapper from '@ecl/story-wrapper';
import { LoremIpsum } from 'lorem-ipsum';

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

const btnAddContent = () => {
  const root = document.querySelector('#root > div');
  for (let i = 0; i < 7; i += 1) {
    const dummyContent = document.createElement('p');
    dummyContent.classList.add('ecl-u-type-paragraph');
    dummyContent.innerHTML = lorem.generateParagraphs(1);
    root.appendChild(dummyContent);
  }
};

export function DeprecatedEcl250() {
  button('Add dummy content', btnAddContent, 'buttons');

  return <TimelineExample />;
}

DeprecatedEcl250.decorators = [
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
];

DeprecatedEcl250.parameters = {
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
};

DeprecatedEcl250.storyName = '[deprecated] ECL <2.5.0';

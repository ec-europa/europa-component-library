/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import parse from 'html-react-parser';

import demoContent from '@ecl/ec-specs-timeline/demo/data';

import VanillaTimeline from '@ecl/ec-component-timeline';

import Timeline from '../src/Timeline2';

// Format data
function formatData(data) {
  const formattedData = data;
  for (let i = 0; i < formattedData.items.length; i += 1) {
    formattedData.items[i].content = parse(formattedData.items[i].content);
  }
  return formattedData;
}

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
  .add('default', () => <Timeline {...formatData(demoContent)} />);

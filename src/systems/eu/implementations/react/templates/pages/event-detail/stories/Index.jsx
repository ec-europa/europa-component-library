import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';

import EventDetailPageExample from '../examples/Default';

export default {
  title: 'Templates/Pages/Event detail',
  decorators: [
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

export function EventDetail() {
  return <EventDetailPageExample />;
}
EventDetail.storyName = 'Event detail';

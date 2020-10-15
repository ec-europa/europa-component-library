import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import ContentPageExample from '../examples/Default';

export default {
  title: 'Deprecated/Templates/Content page (ECL<2-12-0)',

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

export const ContentPageEcl2120 = ContentPageExample;

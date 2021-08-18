import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';

import CampaignPageExample from '../examples/Default';

export default {
  title: 'Templates/Pages/Campaign',
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

export const Campaign = () => <CampaignPageExample />;
Campaign.storyName = 'Campaign';

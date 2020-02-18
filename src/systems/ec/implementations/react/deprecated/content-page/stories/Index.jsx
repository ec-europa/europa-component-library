/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import ContentPageExample from '../examples/Default';

export default {
  title: 'Deprecated/Templates',

  decorators: [
    story => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const components = window.ECL.autoInit();
          return { components };
        }}
        beforeUnmount={context => {
          if (context.components) {
            context.components.forEach(c => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const ContentPageEcl2120 = ContentPageExample;

ContentPageEcl2120.story = {
  name: 'Content page (ECL<2-12-0)',
};

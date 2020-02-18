/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import StandardPageExample from '../examples/Default';

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

export const StandardPageEcl2120 = StandardPageExample;

StandardPageEcl2120.story = {
  name: 'Standard page (ECL<2-12-0)',
};

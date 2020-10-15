import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import Table from '../examples/Table';
import TableZebra from '../examples/TableZebra';
import TableMulti from '../examples/TableMulti';
import TableSort from '../examples/TableSort';

export default {
  title: 'Components/Table',

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

export const Default = Table;

Default.storyName = 'default';

export const Zebra = TableZebra;

Zebra.storyName = 'zebra';

export const MultiHeader = TableMulti;

MultiHeader.storyName = 'multi header';

export const SortTable = TableSort;

SortTable.storyName = 'sort table';

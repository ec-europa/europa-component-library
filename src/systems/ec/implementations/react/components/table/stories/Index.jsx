/* eslint-disable react/react-in-jsx-scope, import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import Table from '../examples/Table';
import TableZebra from '../examples/TableZebra';
import TableMulti from '../examples/TableMulti';
import TableSort from '../examples/TableSort';

export default {
  title: 'Components/Table',

  decorators: [
    story => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
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

export const DefaultTable = Table;

DefaultTable.story = {
  name: 'default',
};

export const Zebra = TableZebra;

Zebra.story = {
  name: 'zebra',
};

export const MultiHeader = TableMulti;

MultiHeader.story = {
  name: 'multi header',
};

export const SortTable = TableSort;

SortTable.story = {
  name: 'sort table',
};

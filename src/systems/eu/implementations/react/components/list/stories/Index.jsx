/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import parse from 'html-react-parser';

import demoText from '@ecl/eu-specs-list/demo/data--text';
import demoLink from '@ecl/eu-specs-list/demo/data--link';
import demoDescription from '@ecl/eu-specs-list/demo/data--description';

import UnorderedList from '../src/UnorderedList';
import UnorderedListWithData from '../src/UnorderedListWithData';
import UnorderedListItem from '../src/UnorderedListItem';
import OrderedListWithData from '../src/OrderedListWithData';
import DescriptionListWithData from '../src/DescriptionListWithData';

storiesOf('Components|List', module)
  .addDecorator(withKnobs)
  .add('ordered', () => <OrderedListWithData {...demoText} />)
  .add('unordered', () => {
    return <UnorderedListWithData {...demoText} />;
  })
  .add('without bullet', () => {
    function listContent(items) {
      return items.map(item => {
        if (item.nested) {
          return (
            <UnorderedListItem key={item.label}>
              {parse(item.label)}
              <UnorderedList>{listContent(item.nested)}</UnorderedList>
            </UnorderedListItem>
          );
        }

        return (
          <UnorderedListItem key={item.label}>
            {parse(item.label)}
          </UnorderedListItem>
        );
      });
    }

    return (
      <UnorderedList variant="no-bullet">
        {listContent(demoLink.items)}
      </UnorderedList>
    );
  })
  .add('with divider', () => {
    function listContent(items) {
      return items.map(item => {
        if (item.nested) {
          return (
            <UnorderedListItem key={item.label}>
              {parse(item.label)}
              <UnorderedList>{listContent(item.nested)}</UnorderedList>
            </UnorderedListItem>
          );
        }

        return (
          <UnorderedListItem key={item.label}>
            {parse(item.label)}
          </UnorderedListItem>
        );
      });
    }

    return (
      <UnorderedList variant="divider">
        {listContent(demoLink.items)}
      </UnorderedList>
    );
  })
  .add('description', () => <DescriptionListWithData {...demoDescription} />);

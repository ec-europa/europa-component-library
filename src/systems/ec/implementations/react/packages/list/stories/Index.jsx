/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import parse from 'html-react-parser';

import demoText from '@ecl/ec-specs-list/demo/data--text';
import demoLink from '@ecl/ec-specs-list/demo/data--link';
import demoDescription from '@ecl/ec-specs-list/demo/data--description';

import UnorderedList from '../src/UnorderedList';
import UnorderedListItem from '../src/UnorderedListItem';
import OrderedListWithData from '../src/OrderedListWithData';
import DescriptionListWithData from '../src/DescriptionListWithData';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('ordered', () => <OrderedListWithData {...demoText} />)
  .add('unordered', () => {
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
      <UnorderedList
        variant={select(
          'Variant',
          {
            Default: '',
            'No bullet': 'no-bullet',
            Dividers: 'divider',
          },
          ''
        )}
      >
        {listContent(demoLink.items)}
      </UnorderedList>
    );
  })
  .add('description', () => <DescriptionListWithData {...demoDescription} />);

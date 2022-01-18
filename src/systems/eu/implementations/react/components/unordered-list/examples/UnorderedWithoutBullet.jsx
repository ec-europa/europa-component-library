import React from 'react';
import parse from 'html-react-parser';
import demoLink from '@ecl/eu-specs-unordered-list/demo/data--link';
import UnorderedList from '../src/UnorderedList';
import UnorderedListItem from '../src/UnorderedListItem';

const listContent = (items) =>
  items.map((item) => {
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

export default function () {
  return (
    <UnorderedList variant="no-bullet">
      {listContent(demoLink.items)}
    </UnorderedList>
  );
}

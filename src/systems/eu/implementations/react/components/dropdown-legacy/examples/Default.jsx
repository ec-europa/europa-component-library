import React from 'react';
import demoContent from '@ecl/ec-specs-dropdown-legacy/demo/data';
import parse from 'html-react-parser';
import {
  UnorderedList,
  UnorderedListItem,
} from '@ecl/eu-react-component-unordered-list';
import { DropdownLegacy } from '../src/DropdownLegacy';

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
    <DropdownLegacy
      button={demoContent.button}
      id={demoContent.id}
      data-ecl-auto-init="DropdownLegacy"
      variant="padded"
    >
      <UnorderedList variant="no-bullet">
        {listContent(demoContent.list.items)}
      </UnorderedList>
    </DropdownLegacy>
  );
}

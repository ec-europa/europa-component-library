import React from 'react';
import demoText from '@ecl/eu-specs-unordered-list/demo/data--text';
import UnorderedListWithData from '../src/UnorderedListWithData';

export default function () {
  return <UnorderedListWithData {...demoText} />;
}

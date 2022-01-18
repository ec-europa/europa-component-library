import React from 'react';
import parse from 'html-react-parser';

import demoContentDefault from '@ecl/ec-specs-content-item/demo/data--default';
import ContentItem from '../src/ContentItem';

// Format data
demoContentDefault.meta.label = parse(demoContentDefault.meta.label);

export default function () {
  return <ContentItem {...demoContentDefault} />;
}

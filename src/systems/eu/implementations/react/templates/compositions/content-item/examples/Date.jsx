import React from 'react';
import parse from 'html-react-parser';

import demoContentDate from '@ecl/eu-specs-content-item/demo/data--date';
import ContentItem from '../src/ContentItem';

// Format data
demoContentDate.meta.label = parse(demoContentDate.meta.label);

export default function () {
  return <ContentItem {...demoContentDate} />;
}

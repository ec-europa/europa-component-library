import React from 'react';
import parse from 'html-react-parser';

import demoContentImageLeft from '@ecl/ec-specs-content-item/demo/data--image-left';
import ContentItem from '../src/ContentItem';

// Format data
demoContentImageLeft.description.label = parse(
  demoContentImageLeft.description.label
);

export default function () {
  return <ContentItem {...demoContentImageLeft} />;
}

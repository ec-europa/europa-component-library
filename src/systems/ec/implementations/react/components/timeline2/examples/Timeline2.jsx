import React from 'react';
import parse from 'html-react-parser';
import demoContent from '@ecl/ec-specs-timeline2/demo/data';
import { Timeline2 } from '../src/Timeline2';

// Format data
function formatData(data) {
  const formattedData = data;
  for (let i = 0; i < formattedData.items.length; i += 1) {
    if (typeof formattedData.items[i].content === 'string') {
      formattedData.items[i].content = parse(formattedData.items[i].content);
    }
  }
  return formattedData;
}

export default function () {
  return (
    <Timeline2 {...formatData(demoContent)} data-ecl-auto-init="Timeline2" />
  );
}

import React from 'react';
import parse from 'html-react-parser';
import demoContent from '@ecl/ec-specs-timeline/demo/data';
import { Timeline } from '../src/Timeline';

// Format data
function formatData(data) {
  const formattedData = data;
  delete formattedData.toggleCollapsed;
  delete formattedData.toggleExpanded;
  for (let i = 0; i < formattedData.items.length; i += 1) {
    if (typeof formattedData.items[i].content === 'string') {
      formattedData.items[i].content = parse(formattedData.items[i].content);
    }
  }
  return formattedData;
}

export default function () {
  return (
    <Timeline {...formatData(demoContent)} data-ecl-auto-init="Timeline" />
  );
}

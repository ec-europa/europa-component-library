import React from 'react';
import demoDescription from '@ecl/ec-specs-description-list/demo/data';
import DescriptionListWithData from '../src/DescriptionListWithData';

export default function () {
  return <DescriptionListWithData {...demoDescription} />;
}

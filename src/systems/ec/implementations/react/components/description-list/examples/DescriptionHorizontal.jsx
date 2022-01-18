import React from 'react';
import demoDescriptionHorizontal from '@ecl/ec-specs-description-list/demo/data--horizontal';
import DescriptionListWithData from '../src/DescriptionListWithData';

export default function () {
  return (
    <DescriptionListWithData
      variant="horizontal"
      {...demoDescriptionHorizontal}
    />
  );
}

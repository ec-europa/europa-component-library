import React from 'react';
import demoDescriptionHorizontal from '@ecl/ec-specs-description-list/demo/data--horizontal';
import demoDescriptionTaxonomy from '@ecl/ec-specs-description-list/demo/data--taxonomy';
import DescriptionListWithData from '../src/DescriptionListWithData';

export default function () {
  return (
    <>
      <DescriptionListWithData
        variant="horizontal"
        {...demoDescriptionHorizontal}
      />
      <DescriptionListWithData
        variant="taxonomy"
        {...demoDescriptionTaxonomy}
      />
    </>
  );
}

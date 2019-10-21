/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';
import breadcrumbContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbHarmonised {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);

export default breadcrumb;

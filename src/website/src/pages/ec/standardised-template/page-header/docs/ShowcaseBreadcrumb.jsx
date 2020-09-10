import React from 'react';
import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';
import breadcrumbContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbStandardised {...breadcrumbProps} ellipsisLabel="Click to expand">
    {items.map((item) => (
      <BreadcrumbStandardisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbStandardised>
);

export default breadcrumb;

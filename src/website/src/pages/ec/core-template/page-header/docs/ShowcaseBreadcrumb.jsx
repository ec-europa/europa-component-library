import React from 'react';
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';
import breadcrumbContent from '@ecl/ec-specs-breadcrumb-core/demo/data';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbCore {...breadcrumbProps} ellipsisLabel="Click to expand">
    {items.map((item) => (
      <BreadcrumbCoreItem {...item} key={item.label} />
    ))}
  </BreadcrumbCore>
);

export default breadcrumb;

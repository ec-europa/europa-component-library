import React from 'react';
import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data-simple';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

export default breadcrumb;

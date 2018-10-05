/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';
import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

export default breadcrumb;

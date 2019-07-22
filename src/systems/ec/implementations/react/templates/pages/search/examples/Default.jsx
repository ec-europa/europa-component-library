/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import data from '@ecl/ec-specs-search-page/demo/data';

import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';
import SearchPage from '../src/SearchPage';

export default () => {
  const { items, ...breadcrumbProps } = data.breadcrumb;
  const breadcrumb = (
    <Breadcrumb {...breadcrumbProps}>
      {items.map(item => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  );
  data.pageHeader.breadcrumb = breadcrumb;

  return (
    <SearchPage
      siteHeader={data.siteHeader}
      pageHeader={data.pageHeader}
      footer={data.footer}
    />
  );
};

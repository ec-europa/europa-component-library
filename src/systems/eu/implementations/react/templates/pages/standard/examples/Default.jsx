import React from 'react';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data--simple';
import siteHeaderContent from '@ecl/eu-specs-site-header/demo/data--en';
import pageHeaderContent from '@ecl/eu-specs-page-header/demo/data--branded-homepage-image';
import mediaContainerContent from '@ecl/ec-specs-media-container/demo/data--video';
import cardContent from '@ecl/eu-specs-card/demo/data--card';
import footerContent from '@ecl/eu-specs-footer/demo/data--corporate';

import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';
import StandardPage from '../src/StandardPage';

export default function () {
  const { items, ...breadcrumbProps } = breadcrumbContent;
  const breadcrumb = (
    <Breadcrumb {...breadcrumbProps}>
      {items.map((item) => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  );
  pageHeaderContent.breadcrumb = breadcrumb;

  return (
    <StandardPage
      siteHeader={siteHeaderContent}
      pageHeader={pageHeaderContent}
      card={cardContent}
      footer={footerContent}
      mediaContainer={mediaContainerContent}
    />
  );
}

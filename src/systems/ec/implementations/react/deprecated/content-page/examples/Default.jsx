/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data--simple';
import siteHeaderContent from '@ecl/ec-specs-site-header/demo/data--en';
import pageHeaderContent from '@ecl/ec-specs-page-header/demo/data--title-description';
import mediaContainerContent from '@ecl/ec-specs-media-container/demo/data--video';
import cardContent from '@ecl/ec-specs-card/demo/data--card';
import footerContent from '@ecl/ec-specs-footer/demo/data--corporate';
import inpageContent from '@ecl/ec-specs-inpage-navigation/demo/data';

import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';
import ContentPage from '../src/ContentPage';

export default () => {
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
    <ContentPage
      siteHeader={siteHeaderContent}
      pageHeader={pageHeaderContent}
      card={cardContent}
      footer={footerContent}
      mediaContainer={mediaContainerContent}
      inpageNavigation={inpageContent}
    />
  );
};

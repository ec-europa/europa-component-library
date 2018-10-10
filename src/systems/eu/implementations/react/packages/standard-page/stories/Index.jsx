/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';
import siteHeaderContent from '@ecl/eu-specs-site-header/demo/data';
import pageHeaderContent from '@ecl/eu-specs-page-header/demo/data-branded-homepage-image';
import cardContent from '@ecl/eu-specs-card/demo/data--card';
import footerContent from '@ecl/eu-specs-footer/demo/data';

import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';
import StandardPage from '../StandardPage';

storiesOf('Standard page', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const { items, ...breadcrumbProps } = breadcrumbContent;
    const breadcrumb = (
      <Breadcrumb {...breadcrumbProps}>
        {items.map(item => (
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
      />
    );
  });

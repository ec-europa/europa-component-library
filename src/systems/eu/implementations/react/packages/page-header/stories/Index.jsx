/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';
import demoTitleDescriptionContent from '@ecl/eu-specs-page-header/demo/data-title-description';

import PageHeader from '../PageHeader';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

storiesOf('PageHeader', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleDescriptionContent.title)}
      description={text('Description', demoTitleDescriptionContent.description)}
    />
  ))
  .add('homepage', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleDescriptionContent.title)}
      description={text('Description', demoTitleDescriptionContent.description)}
      isHomepage
    />
  ))
  .add('branded-homepage', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleDescriptionContent.title)}
      description={text('Description', demoTitleDescriptionContent.description)}
      isBranded
    />
  ));

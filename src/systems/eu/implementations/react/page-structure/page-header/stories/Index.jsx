/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';
import demoBasic from '@ecl/eu-specs-page-header/demo/data-basic';
import demoHomepage from '@ecl/eu-specs-page-header/demo/data-homepage';
import demoHomepageImage from '@ecl/eu-specs-page-header/demo/data-homepage-image';
import demoBrandedHomepage from '@ecl/eu-specs-page-header/demo/data-branded-homepage';
import demoBrandedHomepageImage from '@ecl/eu-specs-page-header/demo/data-branded-homepage-image';

import PageHeader from '../src/PageHeader';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

storiesOf('Page structure|PageHeader', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoBasic.title)}
    />
  ))
  .add('homepage', () => (
    <PageHeader
      {...demoHomepage}
      title={text('Title', demoHomepage.title)}
      slogan={text('Slogan', demoHomepage.slogan)}
    />
  ))
  .add('homepage-image', () => (
    <PageHeader
      {...demoHomepageImage}
      title={text('Title', demoHomepageImage.title)}
      slogan={text('Slogan', demoHomepageImage.slogan)}
      image={text('Image', demoHomepageImage.image)}
    />
  ))
  .add('branded-homepage', () => (
    <PageHeader
      {...demoBrandedHomepage}
      breadcrumb={breadcrumb}
      title={text('Title', demoBrandedHomepage.title)}
      slogan={text('Slogan', demoBrandedHomepage.slogan)}
    />
  ))
  .add('branded-homepage-image', () => (
    <PageHeader
      {...demoBrandedHomepageImage}
      breadcrumb={breadcrumb}
      title={text('Title', demoBrandedHomepageImage.title)}
      slogan={text('Slogan', demoBrandedHomepageImage.slogan)}
      image={text('Image', demoBrandedHomepageImage.image)}
    />
  ));

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
import demoEventsContent from '@ecl/eu-specs-page-header/demo/data-events';
import demoEventsDescriptionContent from '@ecl/eu-specs-page-header/demo/data-events-description';

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
  ))
  .add('events', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoEventsContent.title)}
      meta={text('Meta', demoEventsContent.meta)}
      infos={demoEventsContent.infos.map((info, index) => ({
        icon: info.icon,
        text: text(`Info ${index} text`, info.text),
      }))}
    />
  ))
  .add('events-description', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoEventsDescriptionContent.title)}
      description={text(
        'Description',
        demoEventsDescriptionContent.description
      )}
      meta={text('Meta', demoEventsDescriptionContent.meta)}
      infos={demoEventsDescriptionContent.infos.map((info, index) => ({
        icon: info.icon,
        text: text(`Info ${index} text`, info.text),
      }))}
    />
  ));

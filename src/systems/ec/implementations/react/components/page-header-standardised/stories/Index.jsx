/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data-simple';
import demoTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data-title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data-meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data-meta-title-description';
import demoTitleDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data-title-description';
import demoEventsContent from '@ecl/ec-specs-page-header-standardised/demo/data-events';
import demoEventsDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data-events-description';

import PageHeaderStandardised from '../src/PageHeaderStandardised';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

storiesOf('Components|Page Headers/Standardised', module)
  .addDecorator(withKnobs)
  .add('title', () => (
    <PageHeaderStandardised
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleContent.title)}
    />
  ))
  .add('meta-title', () => (
    <PageHeaderStandardised
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleContent.title)}
      meta={text('Meta', demoMetaTitleContent.meta)}
    />
  ))
  .add('meta-title-description', () => (
    <PageHeaderStandardised
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleDescriptionContent.title)}
      description={text(
        'Description',
        demoMetaTitleDescriptionContent.description
      )}
      meta={text('Meta', demoMetaTitleDescriptionContent.meta)}
    />
  ))
  .add('title-description', () => (
    <PageHeaderStandardised
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleDescriptionContent.title)}
      description={text('Description', demoTitleDescriptionContent.description)}
    />
  ))
  .add('events', () => (
    <PageHeaderStandardised
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
    <PageHeaderStandardised
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

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data--simple';
import demoTitleContent from '@ecl/ec-specs-page-header/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header/demo/data--meta-title-description';
import demoTitleDescriptionContent from '@ecl/ec-specs-page-header/demo/data--title-description';
import demoEventsContent from '@ecl/ec-specs-page-header/demo/data--events';
import demoEventsDescriptionContent from '@ecl/ec-specs-page-header/demo/data--events-description';
import demoBackgroundImage from '@ecl/ec-specs-page-header/demo/data--background-image';

import PageHeader from '../src/PageHeader';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map((item) => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

export default {
  title: 'Deprecated/Page Header (ECL<2-14-0)',
  decorators: [withKnobs],
};

export function Title() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleContent.title)}
    />
  );
}

Title.storyName = 'title';

export function MetaTitle() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleContent.title)}
      meta={text('Meta', demoMetaTitleContent.meta)}
    />
  );
}

MetaTitle.storyName = 'meta-title';

export function MetaTitleDescription() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleDescriptionContent.title)}
      description={text(
        'Description',
        demoMetaTitleDescriptionContent.description
      )}
      meta={text('Meta', demoMetaTitleDescriptionContent.meta)}
    />
  );
}

MetaTitleDescription.storyName = 'meta-title-description';

export function TitleDescription() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleDescriptionContent.title)}
      description={text('Description', demoTitleDescriptionContent.description)}
    />
  );
}

TitleDescription.storyName = 'title-description';

export function Events() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoEventsContent.title)}
      meta={text('Meta', demoEventsContent.meta)}
      infos={demoEventsContent.infos.map((info, index) => ({
        icon: info.icon,
        text: text(`Info ${index} text`, info.text),
      }))}
    />
  );
}

Events.storyName = 'events';

export function EventsDescription() {
  return (
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
  );
}

EventsDescription.storyName = 'events-description';

export function BackgroundImage() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoBackgroundImage.title)}
      description={text('Description', demoBackgroundImage.description)}
      meta={text('Meta', demoBackgroundImage.meta)}
      backgroundImage={demoBackgroundImage.backgroundImage}
    />
  );
}

BackgroundImage.storyName = 'background-image';

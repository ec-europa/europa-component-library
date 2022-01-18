import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Breadcrumb, { BreadcrumbItem } from '@ecl/eu-react-component-breadcrumb';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb/demo/data--simple';
import demoBasic from '@ecl/eu-specs-page-header/demo/data--basic';
import demoHomepage from '@ecl/eu-specs-page-header/demo/data--homepage';
import demoHomepageImage from '@ecl/eu-specs-page-header/demo/data--homepage-image';
import demoBrandedHomepage from '@ecl/eu-specs-page-header/demo/data--branded-homepage';
import demoBrandedHomepageImage from '@ecl/eu-specs-page-header/demo/data--branded-homepage-image';
import demoEventsContent from '@ecl/eu-specs-page-header/demo/data--events';
import demoEventsDescriptionContent from '@ecl/eu-specs-page-header/demo/data--events-description';

import PageHeader from '../src/PageHeader';

export default {
  title: 'Page Structure/Page header',
  decorators: [withKnobs],
};

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map((item) => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);

export function Basic() {
  return (
    <PageHeader
      breadcrumb={breadcrumb}
      title={text('Title', demoBasic.title)}
    />
  );
}
Basic.storyName = 'basic';

export function Homepage() {
  return (
    <PageHeader
      {...demoHomepage}
      title={text('Title', demoHomepage.title)}
      slogan={text('Slogan', demoHomepage.slogan)}
    />
  );
}
Homepage.storyName = 'homepage';

export function HomepageImage() {
  return (
    <PageHeader
      {...demoHomepageImage}
      title={text('Title', demoHomepageImage.title)}
      slogan={text('Slogan', demoHomepageImage.slogan)}
      image={text('Image', demoHomepageImage.image)}
    />
  );
}

HomepageImage.storyName = 'homepage image';

export function BrandedHomepage() {
  return (
    <PageHeader
      {...demoBrandedHomepage}
      breadcrumb={breadcrumb}
      title={text('Title', demoBrandedHomepage.title)}
      slogan={text('Slogan', demoBrandedHomepage.slogan)}
    />
  );
}

BrandedHomepage.storyName = 'branded homepage';

export function BrandedHomepageImage() {
  return (
    <PageHeader
      {...demoBrandedHomepageImage}
      breadcrumb={breadcrumb}
      title={text('Title', demoBrandedHomepageImage.title)}
      slogan={text('Slogan', demoBrandedHomepageImage.slogan)}
      image={text('Image', demoBrandedHomepageImage.image)}
    />
  );
}

BrandedHomepageImage.storyName = 'branded homepage image';

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

EventsDescription.storyName = 'events description';

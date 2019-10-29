/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import parse from 'html-react-parser';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbStandardised, {
  BreadcrumbStandardisedItem,
} from '@ecl/ec-react-component-breadcrumb-standardised';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title-description';

import PageHeaderStandardised from '../src/PageHeaderStandardised';

// Format data
demoMetaTitleContent.meta = parse(demoMetaTitleContent.meta);
demoMetaTitleDescriptionContent.meta = parse(
  demoMetaTitleDescriptionContent.meta
);

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbStandardised
    {...breadcrumbProps}
    data-ecl-auto-init="BreadcrumbStandardised"
  >
    {items.map(item => (
      <BreadcrumbStandardisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbStandardised>
);

storiesOf('Components|Page Headers/Standardised', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        if (!window.ECL) return {};

        const components = window.ECL.autoInit();
        return { components };
      }}
      beforeUnmount={context => {
        if (context.components) {
          context.components.forEach(c => c.destroy());
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
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
  ));

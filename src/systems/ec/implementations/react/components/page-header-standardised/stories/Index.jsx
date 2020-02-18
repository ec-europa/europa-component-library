/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import parse from 'html-react-parser';
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

export default {
  title: 'Components/Page Headers/Standardised',

  decorators: [
    withKnobs,
    story => (
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
    ),
  ],
};

export const Title = () => (
  <PageHeaderStandardised
    breadcrumb={breadcrumb}
    title={text('Title', demoTitleContent.title)}
  />
);

Title.story = {
  name: 'title',
};

export const MetaTitle = () => (
  <PageHeaderStandardised
    breadcrumb={breadcrumb}
    title={text('Title', demoMetaTitleContent.title)}
    meta={parse(text('Meta', demoMetaTitleContent.meta))}
  />
);

MetaTitle.story = {
  name: 'meta-title',
  parameters: { knobs: { escapeHTML: false } },
};

export const MetaTitleDescription = () => (
  <PageHeaderStandardised
    breadcrumb={breadcrumb}
    title={text('Title', demoMetaTitleDescriptionContent.title)}
    description={text(
      'Description',
      demoMetaTitleDescriptionContent.description
    )}
    meta={parse(text('Meta', demoMetaTitleDescriptionContent.meta))}
  />
);

MetaTitleDescription.story = {
  name: 'meta-title-description',
  parameters: { knobs: { escapeHTML: false } },
};

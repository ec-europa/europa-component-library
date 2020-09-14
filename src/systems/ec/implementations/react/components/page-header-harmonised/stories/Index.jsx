import React from 'react';
import parse from 'html-react-parser';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-harmonised/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title-description';

import PageHeaderHarmonised from '../src/PageHeaderHarmonised';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbHarmonised
    {...breadcrumbProps}
    ellipsisLabel="Click here to expand"
    data-ecl-auto-init="BreadcrumbHarmonised"
  >
    {items.map((item) => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);

export default {
  title: 'Components/Page Headers/Harmonised',

  decorators: [
    withKnobs,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Title = () => (
  <PageHeaderHarmonised
    breadcrumb={breadcrumb}
    title={text('Title', demoTitleContent.title)}
  />
);

Title.story = {
  name: 'title',
};

export const MetaTitle = () => (
  <PageHeaderHarmonised
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
  <PageHeaderHarmonised
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

import React from 'react';
import parse from 'html-react-parser';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/eu-react-component-breadcrumb-harmonised';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb-harmonised/demo/data';
import demoTitleContent from '@ecl/eu-specs-page-header-harmonised/demo/data--title';
import demoMetaTitleContent from '@ecl/eu-specs-page-header-harmonised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/eu-specs-page-header-harmonised/demo/data--meta-title-description';

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

export function Title() {
  return (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleContent.title)}
    />
  );
}

Title.storyName = 'title';

export function MetaTitle() {
  return (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleContent.title)}
      meta={parse(text('Meta', demoMetaTitleContent.meta))}
    />
  );
}

MetaTitle.storyName = 'meta-title';
MetaTitle.parameters = { knobs: { escapeHTML: false } };

export function MetaTitleDescription() {
  return (
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
}

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.parameters = { knobs: { escapeHTML: false } };

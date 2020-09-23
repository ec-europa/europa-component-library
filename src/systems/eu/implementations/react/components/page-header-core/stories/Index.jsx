import React from 'react';
import parse from 'html-react-parser';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/eu-react-component-breadcrumb-core';

import breadcrumbContent from '@ecl/eu-specs-breadcrumb-core/demo/data';
import demoTitleContent from '@ecl/eu-specs-page-header-core/demo/data--title';
import demoMetaTitleContent from '@ecl/eu-specs-page-header-core/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/eu-specs-page-header-core/demo/data--meta-title-description';
import demoBackgroundImage from '@ecl/eu-specs-page-header-core/demo/data--background-image';

import PageHeaderCore from '../src/PageHeaderCore';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbCore
    {...breadcrumbProps}
    ellipsisLabel="Click here to expand"
    data-ecl-auto-init="BreadcrumbCore"
  >
    {items.map((item) => (
      <BreadcrumbCoreItem {...item} key={item.label} />
    ))}
  </BreadcrumbCore>
);

export default {
  title: 'Components/Page Headers/Core',

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
  <PageHeaderCore
    breadcrumb={breadcrumb}
    title={text('Title', demoTitleContent.title)}
  />
);

Title.story = {
  name: 'title',
};

export const MetaTitle = () => (
  <PageHeaderCore
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
  <PageHeaderCore
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

export const BackgroundImage = () => (
  <PageHeaderCore
    image={text('Background image URL', demoBackgroundImage.image)}
    breadcrumb={breadcrumb}
    title={text('Title', demoBackgroundImage.title)}
    description={text('Description', demoBackgroundImage.description)}
    meta={parse(text('Meta', demoBackgroundImage.meta))}
  />
);

BackgroundImage.story = {
  name: 'background image',
  parameters: { knobs: { escapeHTML: false } },
};

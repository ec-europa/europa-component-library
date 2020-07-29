/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';

import demoContentBreadcrumb from '@ecl/ec-specs-breadcrumb-core/demo/data';
import demoContentBannerShaded from '@ecl/ec-specs-page-banner/demo/data--image-shade';

import PageHeaderCore from '../src/PageHeaderCore';

const { items, ...breadcrumbProps } = demoContentBreadcrumb;
const breadcrumb = (
  <BreadcrumbCore {...breadcrumbProps} data-ecl-auto-init="BreadcrumbCore">
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

export const Shaded = () => (
  <PageHeaderCore
    breadcrumb={breadcrumb}
    banner={demoContentBannerShaded}
    breadcrumbPosition="after"
  />
);

Shaded.story = {
  name: 'shaded',
};

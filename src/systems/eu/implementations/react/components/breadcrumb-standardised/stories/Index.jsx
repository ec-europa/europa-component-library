import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/eu-specs-breadcrumb-standardised/demo/data--simple';
import demoContent from '@ecl/eu-specs-breadcrumb-standardised/demo/data';

import { BreadcrumbStandardised } from '../src/BreadcrumbStandardised';
import { BreadcrumbStandardisedItem } from '../src/BreadcrumbStandardisedItem';

export default {
  title: 'Components/Navigation/Breadcrumb standardised',

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

export const Simple = () => {
  const items = simpleContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <BreadcrumbStandardised
      label={simpleContent.label}
      ellipsisLabel="Click to expand"
    >
      {items.map((item) => (
        <BreadcrumbStandardisedItem {...item} key={item.label} />
      ))}
    </BreadcrumbStandardised>
  );
};

Simple.storyName = 'simple';

export const Long = () => {
  const items = demoContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <BreadcrumbStandardised
      label={demoContent.label}
      ellipsisLabel="Click to expand"
      data-ecl-auto-init="BreadcrumbStandardised"
    >
      {items.map((item) => (
        <BreadcrumbStandardisedItem {...item} key={item.label} />
      ))}
    </BreadcrumbStandardised>
  );
};

Long.storyName = 'long';

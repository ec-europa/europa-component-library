import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/eu-specs-breadcrumb-harmonised/demo/data--simple';
import demoContent from '@ecl/eu-specs-breadcrumb-harmonised/demo/data';

import { BreadcrumbHarmonised } from '../src/BreadcrumbHarmonised';
import { BreadcrumbHarmonisedItem } from '../src/BreadcrumbHarmonisedItem';

export default {
  title: 'Components/Navigation/Breadcrumb harmonised',

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
    <BreadcrumbHarmonised
      label={simpleContent.label}
      ellipsisLabel="Click to expand"
    >
      {items.map((item) => (
        <BreadcrumbHarmonisedItem {...item} key={item.label} />
      ))}
    </BreadcrumbHarmonised>
  );
};

Simple.storyName = 'simple';

export const Long = () => {
  const items = demoContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <BreadcrumbHarmonised
      label={demoContent.label}
      ellipsisLabel="Click to expand"
      data-ecl-auto-init="BreadcrumbHarmonised"
    >
      {items.map((item) => (
        <BreadcrumbHarmonisedItem {...item} key={item.label} />
      ))}
    </BreadcrumbHarmonised>
  );
};

Long.storyName = 'long';

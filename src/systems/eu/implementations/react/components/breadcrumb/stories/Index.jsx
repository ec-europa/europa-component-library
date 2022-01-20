import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/eu-specs-breadcrumb/demo/data--simple';
import demoContent from '@ecl/eu-specs-breadcrumb/demo/data';

import { Breadcrumb } from '../src/Breadcrumb';
import { BreadcrumbItem } from '../src/BreadcrumbItem';

export default {
  title: 'Components/Navigation/Breadcrumb',

  decorators: [
    withKnobs,
    (story) => <div style={{ backgroundColor: '#004494' }}>{story()}</div>,
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

export function Simple() {
  const items = simpleContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <Breadcrumb label={simpleContent.label} ellipsisLabel="Click to expand">
      {items.map((item) => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  );
}

Simple.storyName = 'simple';

export function Long() {
  const items = demoContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <Breadcrumb
      label={demoContent.label}
      ellipsisLabel="Click to expand"
      data-ecl-auto-init="Breadcrumb"
    >
      {items.map((item) => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  );
}

Long.storyName = 'long';

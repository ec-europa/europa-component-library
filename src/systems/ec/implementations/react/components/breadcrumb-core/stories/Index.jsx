/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/ec-specs-breadcrumb-core/demo/data--simple';
import demoContent from '@ecl/ec-specs-breadcrumb-core/demo/data';

import { BreadcrumbCore } from '../src/BreadcrumbCore';
import { BreadcrumbCoreItem } from '../src/BreadcrumbCoreItem';

export default {
  title: 'Components|Navigation/Breadcrumb core',

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

export const Simple = () => {
  const items = simpleContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <BreadcrumbCore label={simpleContent.label} ellipsisLabel="Click to expand">
      {items.map(item => (
        <BreadcrumbCoreItem {...item} key={item.label} />
      ))}
    </BreadcrumbCore>
  );
};

Simple.story = {
  name: 'simple',
};

export const Long = () => {
  const items = demoContent.items.map((item, index) => ({
    label: text(`Item ${index}`, item.label),
    href: item.href,
  }));

  return (
    <BreadcrumbCore
      label={demoContent.label}
      ellipsisLabel="Click to expand"
      data-ecl-auto-init="BreadcrumbCore"
    >
      {items.map(item => (
        <BreadcrumbCoreItem {...item} key={item.label} />
      ))}
    </BreadcrumbCore>
  );
};

Long.story = {
  name: 'long',
};

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data--simple';
import demoContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';

import { BreadcrumbHarmonised } from '../src/BreadcrumbHarmonised';
import { BreadcrumbHarmonisedItem } from '../src/BreadcrumbHarmonisedItem';

storiesOf('Components|Navigation/Breadcrumb harmonised', module)
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
  .add('simple', () => {
    const items = simpleContent.items.map((item, index) => ({
      label: text(`Item ${index}`, item.label),
      href: item.href,
    }));

    return (
      <BreadcrumbHarmonised
        label={simpleContent.label}
        ellipsisLabel="Click to expand"
      >
        {items.map(item => (
          <BreadcrumbHarmonisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbHarmonised>
    );
  })
  .add('long', () => {
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
        {items.map(item => (
          <BreadcrumbHarmonisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbHarmonised>
    );
  });

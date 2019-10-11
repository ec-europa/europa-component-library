/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data-simple';
import demoContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data';

import { BreadcrumbStandardised } from '../src/BreadcrumbStandardised';
import { BreadcrumbStandardisedItem } from '../src/BreadcrumbStandardisedItem';

storiesOf('Components|Navigation/Breadcrumb standardised', module)
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
      <BreadcrumbStandardised
        label={simpleContent.label}
        ellipsisLabel="Click to expand"
      >
        {items.map(item => (
          <BreadcrumbStandardisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbStandardised>
    );
  })
  .add('long', () => {
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
        {items.map(item => (
          <BreadcrumbStandardisedItem {...item} key={item.label} />
        ))}
      </BreadcrumbStandardised>
    );
  });

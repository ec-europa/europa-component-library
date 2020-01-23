/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import simpleContent from '@ecl/ec-specs-breadcrumb/demo/data--simple';
import demoContent from '@ecl/ec-specs-breadcrumb/demo/data';

import { Breadcrumb } from '../src/Breadcrumb';
import { BreadcrumbItem } from '../src/BreadcrumbItem';

storiesOf('Components|Navigation/Breadcrumb', module)
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
      <Breadcrumb label={simpleContent.label} ellipsisLabel="Click to expand">
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
  })
  .add('long', () => {
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
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
  });

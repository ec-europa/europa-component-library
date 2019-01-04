/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-tabs/demo/data';

import VanillaTabs from '@ecl/ec-component-tabs';

import Tabs from '../src/Tabs';

storiesOf('Navigation/Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-tabs]');
        const vanillaTabs = new VanillaTabs(element);
        vanillaTabs.init();

        // Return new context
        return { vanillaTabs };
      }}
      beforeUnmount={context => {
        if (context.vanillaTabs) {
          context.vanillaTabs.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => {
    const items = demoContent.items.map((item, key) => ({
      isActive: item.isActive,
      link: {
        ...item.link,
        label: text(`Item ${key + 1}`, item.link.label),
      },
    }));

    return <Tabs items={items} />;
  })
  .add('fit', () => {
    const items = demoContent.items.map((item, key) => ({
      isActive: item.isActive,
      link: {
        ...item.link,
        label: text(`Item ${key + 1}`, item.link.label),
      },
    }));

    return <Tabs items={items} fit />;
  });

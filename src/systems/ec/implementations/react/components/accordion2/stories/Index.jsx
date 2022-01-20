import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-accordion2/demo/data';

import { Accordion2 } from '../src/Accordion2';
import { Accordion2Item } from '../src/Accordion2Item';

export default {
  title: 'Components/Accordion',

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

export function Default() {
  const toggle1 = {
    ...demoContent.items[0].toggle,
    label: text('Toggle 1', demoContent.items[0].toggle.label),
  };

  const toggle2 = {
    ...demoContent.items[1].toggle,
    label: text('Toggle 2', demoContent.items[1].toggle.label),
  };

  const toggle3 = {
    ...demoContent.items[2].toggle,
    label: text('Toggle 3', demoContent.items[2].toggle.label),
  };

  return (
    <Accordion2 data-ecl-auto-init="Accordion2">
      <Accordion2Item
        toggle={toggle1}
        id={demoContent.items[0].id}
        level={demoContent.items[0].level}
      >
        {text('Content 1', demoContent.items[0].content)}
      </Accordion2Item>
      <Accordion2Item
        toggle={toggle2}
        id={demoContent.items[1].id}
        level={demoContent.items[1].level}
      >
        {text('Content 2', demoContent.items[1].content)}
      </Accordion2Item>
      <Accordion2Item
        toggle={toggle3}
        id={demoContent.items[2].id}
        level={demoContent.items[2].level}
      >
        {text('Content 3', demoContent.items[2].content)}
      </Accordion2Item>
    </Accordion2>
  );
}

Default.storyName = 'default';

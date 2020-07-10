import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/eu-specs-expandable/demo/data';

import { Expandable } from '../src/Expandable';

storiesOf('Components/Expandables', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
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
  ))
  .add('default', () => (
    <Expandable
      button={demoContent.button}
      labelExpanded={demoContent.labelExpanded}
      labelCollapsed={demoContent.labelCollapsed}
      id={demoContent.id}
      data-ecl-auto-init="Expandable"
    >
      <p className="ecl-u-type-paragraph-m">{demoContent.content}</p>
    </Expandable>
  ));

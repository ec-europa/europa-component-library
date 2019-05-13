/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/eu-specs-expandable/demo/data';

import VanillaExpandable from '@ecl/eu-component-expandable';

import Expandable from '../src/Expandable';

storiesOf('Components|Expandables', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-expandable]');
        const vanillaExpandable = new VanillaExpandable(element);
        vanillaExpandable.init();

        // Return new context
        return { vanillaExpandable };
      }}
      beforeUnmount={context => {
        if (context.vanillaExpandable) {
          context.vanillaExpandable.destroy();
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
    >
      <p className="ecl-u-type-paragraph-m">{demoContent.content}</p>
    </Expandable>
  ));

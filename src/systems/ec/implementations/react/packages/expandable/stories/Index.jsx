/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContentButton from '@ecl/ec-specs-expandable/demo/data--button';
import demoContentLink from '@ecl/ec-specs-expandable/demo/data--link';

import VanillaExpandable from '@ecl/ec-component-expandable';

import Expandable from '@ecl/ec-react-component-expandable/Expandable';

storiesOf('Expandable', module)
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
  .add('button', () => (
    <Expandable
      button={demoContentButton.button}
      labelExpanded={demoContentButton.labelExpanded}
      labelCollapsed={demoContentButton.labelCollapsed}
      id={demoContentButton.id}
    >
      <p className="ecl-u-type-paragraph-m">{demoContentButton.content}</p>
    </Expandable>
  ))
  .add('link', () => (
    <Expandable
      link={demoContentLink.link}
      labelExpanded={demoContentLink.labelExpanded}
      labelCollapsed={demoContentLink.labelCollapsed}
      id={demoContentLink.id}
    >
      <p className="ecl-u-type-paragraph-m">{demoContentLink.content}</p>
    </Expandable>
  ));

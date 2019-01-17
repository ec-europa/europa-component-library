/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-accordion/demo/data';

import VanillaAccordion from '@ecl/ec-component-accordion';

import Accordion from '@ecl/ec-react-component-accordion/Accordion';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-accordion]');
        const vanillaAccordion = new VanillaAccordion(element);
        vanillaAccordion.init();

        // Return new context
        return { vanillaAccordion };
      }}
      beforeUnmount={context => {
        if (context.vanillaAccordion) {
          context.vanillaAccordion.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => (
    <Accordion button={demoContent.button} id={demoContent.id}>
      <p className="ecl-u-type-paragraph-m">{demoContent.content}</p>
    </Accordion>
  ));

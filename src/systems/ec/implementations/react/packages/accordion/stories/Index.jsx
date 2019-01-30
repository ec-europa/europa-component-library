/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-accordion/demo/data';

import VanillaAccordion from '@ecl/ec-component-accordion';

import Accordion from '../src/Accordion';
import AccordionItem from '../src/AccordionItem';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const elements = document.querySelectorAll('[data-ecl-accordion]');
        const vanillaAccordions = [];

        for (let i = 0; i < elements.length; i += 1) {
          const vanillaAccordion = new VanillaAccordion(elements[i]);
          vanillaAccordion.init();
          vanillaAccordions.push(vanillaAccordion);
        }

        // Return new context
        return { vanillaAccordions };
      }}
      beforeUnmount={context => {
        if (context.vanillaAccordions) {
          for (let i = 0; i < context.vanillaAccordions.length; i += 1) {
            context.vanillaAccordions[i].destroy();
          }
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => {
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
      <Accordion>
        <AccordionItem
          toggle={toggle1}
          id={demoContent.items[0].id}
          level={demoContent.items[0].level}
        >
          {text('Content 1', demoContent.items[0].content)}
        </AccordionItem>
        <AccordionItem
          toggle={toggle2}
          id={demoContent.items[1].id}
          level={demoContent.items[1].level}
        >
          {text('Content 2', demoContent.items[1].content)}
        </AccordionItem>
        <AccordionItem
          toggle={toggle3}
          id={demoContent.items[2].id}
          level={demoContent.items[2].level}
        >
          {text('Content 3', demoContent.items[2].content)}
        </AccordionItem>
      </Accordion>
    );
  });

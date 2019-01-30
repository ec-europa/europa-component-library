/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/eu-specs-accordion/demo/data';

import VanillaAccordion from '@ecl/eu-component-accordion';

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
    const button1 = {
      ...demoContent.items[0].button,
      label: text('Button 1 label', demoContent.items[0].button.label),
    };

    const button2 = {
      ...demoContent.items[1].button,
      label: text('Button 2 label', demoContent.items[1].button.label),
    };

    const button3 = {
      ...demoContent.items[2].button,
      label: text('Button 3 label', demoContent.items[2].button.label),
    };

    return (
      <Accordion>
        <AccordionItem button={button1} id={demoContent.items[0].id}>
          {text('Content 1', demoContent.items[0].content)}
        </AccordionItem>
        <AccordionItem button={button2} id={demoContent.items[1].id}>
          {text('Content 2', demoContent.items[1].content)}
        </AccordionItem>
        <AccordionItem button={button3} id={demoContent.items[2].id}>
          {text('Content 3', demoContent.items[2].content)}
        </AccordionItem>
      </Accordion>
    );
  });

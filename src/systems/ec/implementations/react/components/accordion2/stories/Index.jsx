/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-accordion2/demo/data';

import Accordion from '../src/Accordion2';
import AccordionItem from '../src/Accordion2Item';

storiesOf('Components|Accordion', module)
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
      <Accordion data-ecl-auto-init="Accordion2">
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

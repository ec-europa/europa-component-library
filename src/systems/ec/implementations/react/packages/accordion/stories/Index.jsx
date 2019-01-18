/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
  .add('default', () => {
    const button1 = {
      ...demoContent.button,
      label: text('Button 1 label', demoContent.button.label),
    };

    const button2 = {
      ...demoContent.button2,
      label: text('Button 2 label', demoContent.button2.label),
    };

    const button3 = {
      ...demoContent.button3,
      label: text('Button 3 label', demoContent.button3.label),
    };

    return (
      <Fragment>
        <Accordion button={button1} id={demoContent.id}>
          {text('Content 1', demoContent.content)}
        </Accordion>
        <Accordion button={button2} id={demoContent.id2}>
          {text('Content 2', demoContent.content)}
        </Accordion>
        <Accordion button={button3} id={demoContent.id3}>
          {text('Content 3', demoContent.content)}
        </Accordion>
      </Fragment>
    );
  });

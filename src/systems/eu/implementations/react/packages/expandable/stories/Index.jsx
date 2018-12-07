/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/eu-specs-expandable/demo/data';

import VanillaExpandable from '@ecl/eu-component-expandable';

import Button from '@ecl/eu-react-component-button/Button';
import Link from '@ecl/eu-react-component-link/Link';

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
    <Fragment>
      <Button
        {...demoContent.button}
        className="ecl-expandable__toggle"
        data-ecl-expandable
        data-ecl-label-expanded={demoContent.labelExpanded}
        data-ecl-label-collapsed={demoContent.labelCollapsed}
        aria-controls="example-expandable-content"
        id="example-expandable-toggle"
      />
      <p
        className="ecl-expandable__content ecl-u-type-paragraph-m"
        id="example-expandable-content"
        aria-labelledby="example-expandable-toggle"
        aria-hidden="true"
      >
        {demoContent.content}
      </p>
    </Fragment>
  ))
  .add('link', () => (
    <Fragment>
      <Link
        {...demoContent.link}
        className="ecl-expandable__toggle"
        data-ecl-expandable
        data-ecl-label-expanded={demoContent.labelExpanded}
        data-ecl-label-collapsed={demoContent.labelCollapsed}
        aria-controls="example-expandable-content"
        id="example-expandable-toggle"
      />
      <p
        className="ecl-expandable__content ecl-u-type-paragraph-m"
        id="example-expandable-content"
        aria-labelledby="example-expandable-toggle"
        aria-hidden="true"
      >
        {demoContent.content}
      </p>
    </Fragment>
  ));

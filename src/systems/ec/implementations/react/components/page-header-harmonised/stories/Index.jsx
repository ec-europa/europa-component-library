/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-harmonised/demo/data--group1';

import PageHeaderHarmonised from '../src/PageHeaderHarmonised';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb1 = (
  <BreadcrumbHarmonised
    {...breadcrumbProps}
    data-ecl-auto-init="BreadcrumbHarmonised"
    className="ecl-page-header-harmonised__breadcrumb ecl-breadcrumb-harmonised--group1"
  >
    {items.map(item => (
      <BreadcrumbHarmonisedItem {...item} key={item.label} />
    ))}
  </BreadcrumbHarmonised>
);

storiesOf('Components|Page Headers/Harmonised', module)
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
  .add('group 1', () => (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb1}
      title={text('Title', demoMetaTitleDescriptionContent.title)}
      description={text(
        'Description',
        demoMetaTitleDescriptionContent.description
      )}
      meta={text('Meta', demoMetaTitleDescriptionContent.meta)}
    />
  ));

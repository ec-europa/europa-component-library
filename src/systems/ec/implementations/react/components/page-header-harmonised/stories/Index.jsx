/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbHarmonised, {
  BreadcrumbHarmonisedItem,
} from '@ecl/ec-react-component-breadcrumb-harmonised';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-harmonised/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title-description';

import PageHeaderHarmonised from '../src/PageHeaderHarmonised';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbHarmonised
    {...breadcrumbProps}
    data-ecl-auto-init="BreadcrumbHarmonised"
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
  .add('title', () => (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleContent.title)}
    />
  ))
  .add('meta-title', () => (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleContent.title)}
      meta={text('Meta', demoMetaTitleContent.meta)}
    />
  ))
  .add('meta-title-description', () => (
    <PageHeaderHarmonised
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleDescriptionContent.title)}
      description={text(
        'Description',
        demoMetaTitleDescriptionContent.description
      )}
      meta={text('Meta', demoMetaTitleDescriptionContent.meta)}
    />
  ));

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import BreadcrumbCore, {
  BreadcrumbCoreItem,
} from '@ecl/ec-react-component-breadcrumb-core';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-core/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-core/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-core/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-core/demo/data--meta-title-description';

import PageHeaderCore from '../src/PageHeaderCore';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <BreadcrumbCore {...breadcrumbProps} data-ecl-auto-init="BreadcrumbCore">
    {items.map(item => (
      <BreadcrumbCoreItem {...item} key={item.label} />
    ))}
  </BreadcrumbCore>
);

storiesOf('Components|Page Headers/Core', module)
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
    <PageHeaderCore
      breadcrumb={breadcrumb}
      title={text('Title', demoTitleContent.title)}
    />
  ))
  .add('meta-title', () => (
    <PageHeaderCore
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleContent.title)}
      meta={text('Meta', demoMetaTitleContent.meta)}
    />
  ))
  .add('meta-title-description', () => (
    <PageHeaderCore
      breadcrumb={breadcrumb}
      title={text('Title', demoMetaTitleDescriptionContent.title)}
      description={text(
        'Description',
        demoMetaTitleDescriptionContent.description
      )}
      meta={text('Meta', demoMetaTitleDescriptionContent.meta)}
    />
  ));

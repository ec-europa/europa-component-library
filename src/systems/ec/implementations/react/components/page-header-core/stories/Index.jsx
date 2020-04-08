/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-core/demo/data';
import bannerContentShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import bannerContentImage from '@ecl/ec-specs-page-banner/demo/data--image';
import bannerContentPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import bannerContentBackground from '@ecl/ec-specs-page-banner/demo/data--image-background';

import PageHeaderCore from '../src/PageHeaderCore';

const breadcrumbPosition = {
  Before: 'before',
  After: 'after',
};

export default {
  title: 'Components/Page Headers/Core',

  decorators: [
    withKnobs,
    story => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={context => {
          if (context.components) {
            context.components.forEach(c => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Primary = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentPrimary));
  dataBannerCopy.isCentered = boolean('Banner centered', false);

  return (
    <PageHeaderCore
      variant="primary"
      breadcrumb={breadcrumbContent}
      banner={dataBannerCopy}
    />
  );
};

Primary.story = {
  name: 'primary',
};

export const Image = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentImage));
  dataBannerCopy.isCentered = boolean('Banner centered', true);

  return (
    <PageHeaderCore
      variant="image"
      breadcrumb={breadcrumbContent}
      breadcrumbPosition={select(
        'Breadcrumb position',
        breadcrumbPosition,
        'after'
      )}
      banner={dataBannerCopy}
    />
  );
};

Image.story = {
  name: 'image',
};

export const ImageShade = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentShade));
  dataBannerCopy.isCentered = boolean('Banner centered', true);

  return (
    <PageHeaderCore
      variant="image-shade"
      breadcrumb={breadcrumbContent}
      breadcrumbPosition={select(
        'Breadcrumb position',
        breadcrumbPosition,
        'after'
      )}
      banner={dataBannerCopy}
    />
  );
};

ImageShade.story = {
  name: 'image shade',
};

export const ImageBackground = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentBackground));
  dataBannerCopy.isCentered = boolean('Banner centered', false);

  return (
    <PageHeaderCore
      variant="image-background"
      breadcrumb={breadcrumbContent}
      breadcrumbPosition={select(
        'Breadcrumb position',
        breadcrumbPosition,
        'before'
      )}
      banner={dataBannerCopy}
    />
  );
};

ImageBackground.story = {
  name: 'image background',
};

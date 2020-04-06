/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-core/demo/data';
import bannerContentShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import bannerContentImage from '@ecl/ec-specs-page-banner/demo/data--image';
import bannerContentPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import bannerContentDefault from '@ecl/ec-specs-page-banner/demo/data--default';

import PageHeaderCore from '../src/PageHeaderCore';

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
    <PageHeaderCore breadcrumb={breadcrumbContent} banner={dataBannerCopy} />
  );
};

Primary.story = {
  name: 'primary',
};

export const ImageShade = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentShade));
  dataBannerCopy.isCentered = boolean('Banner centered', true);

  return (
    <PageHeaderCore breadcrumb={breadcrumbContent} banner={dataBannerCopy} />
  );
};

ImageShade.story = {
  name: 'image shade',
};

export const Image = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentImage));
  dataBannerCopy.isCentered = boolean('Banner centered', true);

  return (
    <PageHeaderCore breadcrumb={breadcrumbContent} banner={dataBannerCopy} />
  );
};

Image.story = {
  name: 'image',
};

export const Default = () => {
  const dataBannerCopy = JSON.parse(JSON.stringify(bannerContentDefault));
  dataBannerCopy.isCentered = boolean('Banner centered', false);

  return (
    <PageHeaderCore breadcrumb={breadcrumbContent} banner={dataBannerCopy} />
  );
};

Default.story = {
  name: 'default',
};

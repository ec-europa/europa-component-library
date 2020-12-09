import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import { withCssResources } from '@storybook/addon-cssresources';
import defaultData from '@ecl/ec-specs-campaign-page/demo/data';

import CampaignPage from '../src/CampaignPage';

export default {
  title: 'Templates/Pages/Campaign page',

  decorators: [
    withKnobs,
    withCssResources,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],

  parameters: {
    cssresources: [
      {
        id: 'ecl-legacy-screen',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-legacy-website.css" />`,
        picked: true,
      },
      {
        id: 'ecl-legacy-print',
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-legacy-website-print.css" />`,
        picked: false,
      },
      {
        id: 'test-fake-global-rules',
        code: `
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color: red;
  font-family: serif;
  font-weight: 700;
  line-height: 2;
}
</style>`,
        picked: false,
      },
    ],
  },
};

export const Campaign = () => {
  const {
    siteHeader: siteHeaderData,
    heroBanner: heroBannerData,
    ...otherData
  } = defaultData;

  const isMultilingual = boolean('Is multilingual?', true, 'Site header');

  const displaySearchForm = boolean(
    'Display search form?',
    true,
    'Site header'
  );

  const siteHeader = {
    ...siteHeaderData,
    languageSelector: isMultilingual ? siteHeaderData.languageSelector : null,
    searchForm: displaySearchForm ? siteHeaderData.searchForm : null,
  };

  const heroBanner = {
    ...heroBannerData,
    variant: 'image',
    title: text('Title', heroBannerData.title, 'Hero banner'),
    description: text('Description', heroBannerData.description, 'Hero banner'),
    isCentered: boolean('Centered', true, 'Hero banner'),
    image: text('Image', heroBannerData.image, 'Hero banner'),
    link: {
      ...heroBannerData.link,
      label: text('Link label', heroBannerData.link.label, 'Hero banner'),
    },
  };
  return (
    <CampaignPage
      {...otherData}
      siteHeader={siteHeader}
      heroBanner={heroBanner}
    />
  );
};

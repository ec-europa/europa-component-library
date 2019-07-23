/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import createFocusTrap from 'focus-trap';
import { withCssResources } from '@storybook/addon-cssresources';
import defaultData from '@ecl/ec-specs-campaign-page/demo/data';

import CampaignPage from '../src/CampaignPage';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .addDecorator(withCssResources)
  .addParameters({
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
  })
  .addDecorator(story => {
    function toggleOverlay(e) {
      e.preventDefault();

      if (this.languageListOverlay.hasAttribute('hidden')) {
        this.languageListOverlay.removeAttribute('hidden');
        e.currentTarget.setAttribute('aria-expanded', true);
        this.focusTrap.activate();
      } else {
        this.languageListOverlay.setAttribute('hidden', true);
        e.currentTarget.setAttribute('aria-expanded', false);
        this.focusTrap.deactivate();
      }
    }

    return (
      <StoryWrapper
        afterMount={() => {
          const languageListOverlay = document.querySelector(
            '[data-ecl-language-list-overlay]'
          );
          const languageSelector = document.querySelector(
            '[data-ecl-language-selector]'
          );
          const close = document.querySelector(
            '[data-ecl-language-list-close]'
          );

          // Create focus trap
          const focusTrap = createFocusTrap(languageListOverlay, {
            escapeDeactivates: false,
          });

          languageSelector.addEventListener(
            'click',
            toggleOverlay.bind({ focusTrap, languageListOverlay })
          );
          close.addEventListener(
            'click',
            toggleOverlay.bind({ focusTrap, languageListOverlay })
          );

          // Return new context
          return { languageSelector, close };
        }}
        beforeUnmount={context => {
          if (context.languageSelector) {
            context.languageSelector.removeEventListener(
              'click',
              toggleOverlay
            );
          }
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('Campaign', () => {
    const { heroBanner: heroBannerData, ...otherData } = defaultData;

    const heroBanner = {
      ...heroBannerData,
      title: text('Title', heroBannerData.title, 'Hero banner'),
      description: text(
        'Description',
        heroBannerData.description,
        'Hero banner'
      ),
      isCentered: boolean('Centered', true, 'Hero banner'),
      image: text('Image', heroBannerData.image, 'Hero banner'),
      link: {
        ...heroBannerData.link,
        label: text('Link label', heroBannerData.link.label, 'Hero banner'),
      },
    };
    return <CampaignPage {...otherData} heroBanner={heroBanner} />;
  });

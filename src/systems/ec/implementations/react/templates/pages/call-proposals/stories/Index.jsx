/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';

import CallProposalsCore from '../examples/CallProposalsCore';
import CallProposalsStandardised from '../examples/CallProposalsStandardised';
import CallProposalsHarmonisedG1 from '../examples/CallProposalsHarmonisedG1';
import CallProposalsHarmonisedG2 from '../examples/CallProposalsHarmonisedG2';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Call for proposals', () => {
    const template = radios(
      'Template',
      {
        Core: 'core',
        Standardised: 'standardised',
        'Harmonised group 1': 'harmonised-g1',
        'Harmonised group 2': 'harmonised-g2',
      },
      'core',
      'template'
    );

    const optional = {};

    // Standardised
    if (template === 'standardised') {
      optional.siteHeaderLogin = boolean(
        'Site header - Login',
        true,
        'optional'
      );
      optional.siteHeaderLangSelect = boolean(
        'Site header - Language selector',
        true,
        'optional'
      );
      optional.siteHeaderMenu = boolean('Site header - Menu', true, 'optional');
      optional.pageHeaderBreadcrumb = boolean(
        'Page header - Breadcrumb',
        true,
        'optional'
      );
      optional.pageHeaderMeta = boolean('Page header - Meta', true, 'optional');
      optional.pageHeaderIntro = boolean(
        'Page header - Introduction',
        true,
        'optional'
      );

      return <CallProposalsStandardised {...optional} />;
    }

    // Harmonised group 1
    if (template === 'harmonised-g1') {
      optional.siteHeaderLogin = boolean(
        'Site header - Login',
        true,
        'optional'
      );
      optional.siteHeaderLangSelect = boolean(
        'Site header - Language selector',
        true,
        'optional'
      );
      optional.siteHeaderSearch = boolean(
        'Site header - Search',
        true,
        'optional'
      );
      optional.siteHeaderClassName = boolean(
        'Site header - Class name',
        true,
        'optional'
      );
      optional.siteHeaderMenu = boolean('Site header - Menu', true, 'optional');
      optional.pageHeaderBreadcrumb = boolean(
        'Page header - Breadcrumb',
        true,
        'optional'
      );
      optional.pageHeaderMeta = boolean('Page header - Meta', true, 'optional');
      optional.pageHeaderIntro = boolean(
        'Page header - Introduction',
        true,
        'optional'
      );

      return <CallProposalsHarmonisedG1 {...optional} />;
    }

    // Harmonised group 2
    if (template === 'harmonised-g2') {
      optional.siteHeaderLangSelect = boolean(
        'Site header - Language selector',
        true,
        'optional'
      );
      optional.siteHeaderSearch = boolean(
        'Site header - Search',
        true,
        'optional'
      );
      optional.siteHeaderMenu = boolean('Site header - Menu', true, 'optional');
      optional.pageHeaderBreadcrumb = boolean(
        'Page header - Breadcrumb',
        true,
        'optional'
      );
      optional.pageHeaderMeta = boolean('Page header - Meta', true, 'optional');
      optional.pageHeaderIntro = boolean(
        'Page header - Introduction',
        true,
        'optional'
      );

      return <CallProposalsHarmonisedG2 {...optional} />;
    }

    // Core (default)
    optional.siteHeaderLogin = boolean('Site header - Login', true, 'optional');
    optional.pageHeaderMeta = boolean('Page header - Meta', true, 'optional');
    optional.pageHeaderIntro = boolean(
      'Page header - Introduction',
      true,
      'optional'
    );
    return <CallProposalsCore {...optional} />;
  });

import React from 'react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';

import MainPolicyLegislationCore from '../examples/MainPolicyLegislationCore';
import MainPolicyLegislationStandardised from '../examples/MainPolicyLegislationStandardised';
import MainPolicyLegislationHarmonisedG1 from '../examples/MainPolicyLegislationHarmonisedG1';
import MainPolicyLegislationHarmonisedG2 from '../examples/MainPolicyLegislationHarmonisedG2';

export default {
  title: 'Templates/Pages',
  decorators: [withKnobs],
};

export const MainPolicyLegislation = () => {
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
      'optional (standardised)'
    );
    optional.siteHeaderLangSelect = boolean(
      'Site header - Language selector',
      true,
      'optional (standardised)'
    );
    optional.siteHeaderMenu = boolean(
      'Site header - Menu',
      true,
      'optional (standardised)'
    );
    optional.pageHeaderBreadcrumb = boolean(
      'Page header - Breadcrumb',
      true,
      'optional (standardised)'
    );
    optional.pageHeaderMeta = boolean(
      'Page header - Meta',
      true,
      'optional (standardised)'
    );
    optional.pageHeaderIntro = boolean(
      'Page header - Introduction',
      true,
      'optional (standardised)'
    );

    return <MainPolicyLegislationStandardised {...optional} />;
  }

  // Harmonised group 1
  if (template === 'harmonised-g1') {
    optional.siteHeaderLogin = boolean(
      'Site header - Login',
      true,
      'optional (harmonised group 1)'
    );
    optional.siteHeaderLangSelect = boolean(
      'Site header - Language selector',
      true,
      'optional (harmonised group 1)'
    );
    optional.siteHeaderSearch = boolean(
      'Site header - Search',
      true,
      'optional (harmonised group 1)'
    );
    optional.siteHeaderClassName = boolean(
      'Site header - Class name',
      true,
      'optional (harmonised group 1)'
    );
    optional.siteHeaderMenu = boolean(
      'Site header - Menu',
      true,
      'optional (harmonised group 1)'
    );
    optional.pageHeaderBreadcrumb = boolean(
      'Page header - Breadcrumb',
      true,
      'optional (harmonised group 1)'
    );
    optional.pageHeaderMeta = boolean(
      'Page header - Meta',
      true,
      'optional (harmonised group 1)'
    );
    optional.pageHeaderIntro = boolean(
      'Page header - Introduction',
      true,
      'optional (harmonised group 1)'
    );

    return <MainPolicyLegislationHarmonisedG1 {...optional} />;
  }

  // Harmonised group 2
  if (template === 'harmonised-g2') {
    optional.siteHeaderLangSelect = boolean(
      'Site header - Language selector',
      true,
      'optional (harmonised group 2)'
    );
    optional.siteHeaderSearch = boolean(
      'Site header - Search',
      true,
      'optional (harmonised group 2)'
    );
    optional.siteHeaderMenu = boolean(
      'Site header - Menu',
      true,
      'optional (harmonised group 2)'
    );
    optional.pageHeaderBreadcrumb = boolean(
      'Page header - Breadcrumb',
      true,
      'optional (harmonised group 2)'
    );
    optional.pageHeaderMeta = boolean(
      'Page header - Meta',
      true,
      'optional (harmonised group 2)'
    );
    optional.pageHeaderIntro = boolean(
      'Page header - Introduction',
      true,
      'optional (harmonised group 2)'
    );

    return <MainPolicyLegislationHarmonisedG2 {...optional} />;
  }

  // Core (default)
  optional.siteHeaderLogin = boolean(
    'Site header - Login',
    true,
    'optional (core)'
  );
  optional.pageHeaderMeta = boolean(
    'Page header - Meta',
    true,
    'optional (core)'
  );
  optional.pageHeaderIntro = boolean(
    'Page header - Introduction',
    true,
    'optional (core)'
  );
  return <MainPolicyLegislationCore {...optional} />;
};

MainPolicyLegislation.story = {
  name: 'Main policy legislation',
};

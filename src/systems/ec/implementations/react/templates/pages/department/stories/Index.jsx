import React from 'react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';

import DepartmentCore from '../examples/DepartmentCore';
import DepartmentStandardised from '../examples/DepartmentStandardised';
import DepartmentHarmonisedG1 from '../examples/DepartmentHarmonisedG1';
import DepartmentHarmonisedG2 from '../examples/DepartmentHarmonisedG2';

export default {
  title: 'Templates/Pages/Department',
  decorators: [withKnobs],
};

export function Department() {
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

    return <DepartmentStandardised {...optional} />;
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

    return <DepartmentHarmonisedG1 {...optional} />;
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

    return <DepartmentHarmonisedG2 {...optional} />;
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
  return <DepartmentCore {...optional} />;
}

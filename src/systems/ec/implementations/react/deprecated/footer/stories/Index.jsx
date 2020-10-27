import React from 'react';

import demoContentCorporate from '@ecl/ec-specs-footer/demo/data--corporate';
import demoContentCustom from '@ecl/ec-specs-footer/demo/data--custom';

import Footer from '../src/Footer';

export default {
  title: 'Deprecated/Footer (ECL<2-12-0)',

  parameters: {
    a11y: {
      options: {
        // Don't check "back to top" link
        rules: { 'skip-link': { enabled: false } },
      },
    },
  },
};

export const Corporate = () => <Footer {...demoContentCorporate} />;

Corporate.storyName = 'corporate';

export const Custom = () => <Footer {...demoContentCustom} />;

Custom.storyName = 'custom';

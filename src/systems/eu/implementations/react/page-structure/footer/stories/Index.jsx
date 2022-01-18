import React from 'react';

import demoContentCorporate from '@ecl/eu-specs-footer/demo/data--corporate';
import demoContentCustom from '@ecl/eu-specs-footer/demo/data--custom';

import Footer from '../src/Footer';

export default {
  title: 'Page Structure/Footer',
  parameters: {
    a11y: {
      options: {
        // Don't check "back to top" link
        rules: { 'skip-link': { enabled: false } },
      },
    },
  },
};

export function Corporate() {
  return <Footer {...demoContentCorporate} />;
}
Corporate.storyName = 'corporate';

export function Custom() {
  return <Footer {...demoContentCustom} />;
}
Custom.storyName = 'custom';

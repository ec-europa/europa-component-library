import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContentCorporate from '@ecl/eu-specs-footer/demo/data--corporate';
import demoContentCustom from '@ecl/eu-specs-footer/demo/data--custom';

import Footer from '../src/Footer';

storiesOf('Page Structure/Footer', module)
  .addParameters({
    a11y: {
      options: {
        // Don't check "back to top" link
        rules: { 'skip-link': { enabled: false } },
      },
    },
  })
  .add('corporate', () => <Footer {...demoContentCorporate} />)
  .add('custom', () => <Footer {...demoContentCustom} />);

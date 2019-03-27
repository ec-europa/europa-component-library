/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContentCorporate from '@ecl/ec-specs-footer/demo/data--corporate';
import demoContentCustom from '@ecl/ec-specs-footer/demo/data--custom';

import Footer from '../src/Footer';

storiesOf('Footer', module)
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

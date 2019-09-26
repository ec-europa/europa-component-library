/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContent from '@ecl/ec-specs-footer-core/demo/data';

import FooterCore from '../src/FooterCore';

storiesOf('Components|Footers/Core', module)
  .addParameters({
    a11y: {
      options: {
        // Don't check "back to top" link
        rules: { 'skip-link': { enabled: false } },
      },
    },
  })
  .add('default', () => <FooterCore {...demoContent} />);

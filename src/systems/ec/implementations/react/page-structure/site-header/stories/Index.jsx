/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContentEn from '@ecl/ec-specs-site-header/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header/demo/data--fr';

import SiteHeader from '../src/SiteHeader';

storiesOf('Page structure|SiteHeader', module)
  .add('default', () => <SiteHeader {...demoContentEn} />)
  .add('translated', () => <SiteHeader {...demoContentFr} />);

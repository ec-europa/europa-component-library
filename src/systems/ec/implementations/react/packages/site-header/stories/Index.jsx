/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContent from '@ecl/ec-specs-site-header/demo/data';

import SiteHeader from '../SiteHeader';

storiesOf('SiteHeader', module).add('default', () => (
  <SiteHeader {...demoContent} />
));

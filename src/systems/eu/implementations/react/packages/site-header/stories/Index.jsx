/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import demoContent from '@ecl/eu-specs-site-header/demo/data';
import SiteHeader from '../SiteHeader';

storiesOf('SiteHeader', module).add('default', () => (
  <SiteHeader
    logo={demoContent.logo}
    languageSelector={demoContent.languageSelector}
    searchForm={demoContent.searchForm}
  />
));

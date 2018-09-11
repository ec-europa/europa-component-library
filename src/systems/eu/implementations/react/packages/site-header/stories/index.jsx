/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/eu-specs-site-header/demo/data';

import SiteHeader from '../SiteHeader';
import './index.scss';

storiesOf('SiteHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SiteHeader
      logoHref={demoContent.logoHref}
      selectorHref={demoContent.selectorHref}
      languageName={demoContent.languageName}
      languageCode={demoContent.languageCode}
    />
  ));

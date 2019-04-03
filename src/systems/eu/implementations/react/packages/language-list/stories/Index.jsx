/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContentSplash from '@ecl/eu-specs-language-list/demo/data--splash';
import demoContentOverlay from '@ecl/eu-specs-language-list/demo/data--overlay';

import LanguageListSplash from '../src/LanguageListSplash';
import LanguageListOverlay from '../src/LanguageListOverlay';

storiesOf('LanguageList', module)
  .add('splash', () => <LanguageListSplash {...demoContentSplash} />)
  .add('overlay', () => <LanguageListOverlay {...demoContentOverlay} />);

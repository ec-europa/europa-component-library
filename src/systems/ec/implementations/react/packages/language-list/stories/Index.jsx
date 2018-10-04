/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContentSplash from '@ecl/ec-specs-language-list/demo/data--splash';
import demoContentOverlay from '@ecl/ec-specs-language-list/demo/data--overlay';

import LanguageListSplash from '../LanguageListSplash';
import LanguageListOverlay from '../LanguageListOverlay';

storiesOf('LanguageList', module)
  .addDecorator(withKnobs)
  .add('splash', () => <LanguageListSplash {...demoContentSplash} />)
  .add('overlay', () => <LanguageListOverlay {...demoContentOverlay} />);

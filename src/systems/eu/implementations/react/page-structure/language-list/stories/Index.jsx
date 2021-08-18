import React from 'react';

import demoContentSplash from '@ecl/eu-specs-language-list/demo/data--splash';
import demoContentOverlay from '@ecl/eu-specs-language-list/demo/data--overlay';

import LanguageListSplash from '../src/LanguageListSplash';
import LanguageListOverlay from '../src/LanguageListOverlay';

export default {
  title: 'Page structure/LanguageList',
};

export const Splash = () => <LanguageListSplash {...demoContentSplash} />;

Splash.storyName = 'splash';

export const Overlay = () => <LanguageListOverlay {...demoContentOverlay} />;

Overlay.storyName = 'overlay';

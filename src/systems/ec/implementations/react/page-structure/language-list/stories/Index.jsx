import React from 'react';

import demoContentSplash from '@ecl/ec-specs-language-list/demo/data--splash';
import demoContentOverlay from '@ecl/ec-specs-language-list/demo/data--overlay';

import LanguageListSplash from '../src/LanguageListSplash';
import LanguageListOverlay from '../src/LanguageListOverlay';

export default {
  title: 'Page structure/LanguageList',
};

export const Splash = () => <LanguageListSplash {...demoContentSplash} />;

Splash.story = {
  name: 'splash',
};

export const Overlay = () => <LanguageListOverlay {...demoContentOverlay} />;

Overlay.story = {
  name: 'overlay',
};

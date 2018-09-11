/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/eu-specs-site-header/demo/data';

import SiteHeader from '../SiteHeader';
import './index.scss';

const languages = {
  bulgarian: 'bg',
  spanish: 'es',
  czech: 'cs',
  danish: 'da',
  german: 'de',
  estonian: 'et',
  greek: 'el',
  english: 'en',
  french: 'fr',
  'irish-gaeilge': 'ga',
  croatian: 'hr',
  italian: 'it',
  latvian: 'lv',
  lithuanian: 'lt',
  hungarian: 'hu',
  maltese: 'mt',
  dutch: 'nl',
  polish: 'pl',
  portuguese: 'pt',
  romanian: 'ro',
  slovak: 'sk',
  slovene: 'sl',
  finnish: 'fi',
  swedish: 'sv',
};
const defaultLanguage = 'en';

storiesOf('SiteHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SiteHeader
      logoHref={demoContent.logoHref}
      selectorHref={demoContent.selectorHref}
      language={select('Language', languages, defaultLanguage)}
    />
  ));

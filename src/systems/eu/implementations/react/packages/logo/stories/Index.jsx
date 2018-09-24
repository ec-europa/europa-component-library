/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-logo/demo/data';

import Logo from '../Logo';

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

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Logo
      language={select('Language', languages, defaultLanguage)}
      title={text('Title', demoContent.title)}
    />
  ));

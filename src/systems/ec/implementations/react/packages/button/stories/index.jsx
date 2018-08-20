/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentPrimary from '@ecl/ec-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/ec-specs-button/demo/data--call';
import demoContentGhost from '@ecl/ec-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/ec-specs-button/demo/data--search';

import Button from '../Button';
import './index.scss';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => (
    <Button
      variant='primary'
      label={text('Label', demoContentPrimary.label)}
      typeAttribute='submit'
    />
  ))
  .add('secondary', () => (
    <Button
      variant='secondary'
      label={text('Label', demoContentSecondary.label)}
      typeAttribute='button'
    />
  ))
  .add('call to action', () => (
    <Button
      variant='call'
      label={text('Label', demoContentCall.label)}
      typeAttribute='submit'
    />
  ))
  .add('ghost', () => (
    <Button
      variant='ghost'
      label={text('Label', demoContentGhost.label)}
      typeAttribute='button'
    />
  ))
  .add('search', () => (
    <Button
      variant='search'
      label={text('Label', demoContentSearch.label)}
      typeAttribute='submit'
    />
  ));

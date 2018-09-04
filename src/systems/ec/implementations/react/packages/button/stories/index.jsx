/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import demoContentPrimary from '@ecl/ec-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/ec-specs-button/demo/data--call';
import demoContentGhost from '@ecl/ec-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/ec-specs-button/demo/data--search';

import svgSprite from '@ecl/ec-resources/dist/icons.svg';
import Button from '../Button';
import './index.scss';

const icons = {
  none: '',
  arrow: 'Icon_Corner-arrow-right',
  external: 'Icon_External',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => (
    <Button
      variant="primary"
      label={text('Label', demoContentPrimary.label)}
      typeAttribute="submit"
      icon={select('Icon (sample)', icons, 'none')}
    />
  ))
  .add('secondary', () => (
    <Button
      variant="secondary"
      label={text('Label', demoContentSecondary.label)}
      typeAttribute="button"
      icon={select('Icon (sample)', icons, 'none')}
    />
  ))
  .add('call to action', () => (
    <Button
      variant="call"
      label={text('Label', demoContentCall.label)}
      typeAttribute="submit"
      icon={select('Icon (sample)', icons, 'none')}
    />
  ))
  .add('ghost', () => (
    <Button
      variant="ghost"
      label={text('Label', demoContentGhost.label)}
      typeAttribute="button"
      icon={select('Icon (sample)', icons, 'none')}
    />
  ))
  .add('search', () => (
    <Button
      variant="search"
      label={text('Label', demoContentSearch.label)}
      typeAttribute="submit"
      icon={select('Icon (sample)', icons, 'none')}
    />
  ));

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import demoContentPrimary from '@ecl/ec-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/ec-specs-button/demo/data--call';
import demoContentGhost from '@ecl/ec-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/ec-specs-button/demo/data--search';

import Button from '../src/Button';

const icons = {
  none: '',
  arrow: 'ui--corner-arrow',
  external: 'ui--external',
};

const iconPosition = {
  before: 'before',
  after: 'after',
};

export default {
  title: 'Components/Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const buttonIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'xs',
  };

  return (
    <Button
      variant="primary"
      label={text('Label', demoContentPrimary.label)}
      type="submit"
      icon={buttonIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
      disabled={boolean('Disabled', false)}
    />
  );
};

Primary.story = {
  name: 'primary',
};

export const Secondary = () => {
  const buttonIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'xs',
  };

  return (
    <Button
      variant="secondary"
      label={text('Label', demoContentSecondary.label)}
      type="button"
      icon={buttonIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
      disabled={boolean('Disabled', false)}
    />
  );
};

Secondary.story = {
  name: 'secondary',
};

export const CallToAction = () => {
  const buttonIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'xs',
  };

  return (
    <Button
      variant="call"
      label={text('Label', demoContentCall.label)}
      type="submit"
      icon={buttonIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
      disabled={boolean('Disabled', false)}
    />
  );
};

CallToAction.story = {
  name: 'call to action',
};

export const Text = () => {
  const buttonIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'xs',
  };

  return (
    <Button
      variant="ghost"
      label={text('Label', demoContentGhost.label)}
      type="button"
      icon={buttonIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
      disabled={boolean('Disabled', false)}
    />
  );
};

Text.story = {
  name: 'text',
};

export const Search = () => {
  const buttonIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'xs',
  };

  return (
    <Button
      variant="search"
      label={text('Label', demoContentSearch.label)}
      type="button"
      icon={buttonIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
      disabled={boolean('Disabled', false)}
    />
  );
};

Search.story = {
  name: 'search',
};

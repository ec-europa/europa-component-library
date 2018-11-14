/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import demoContentPrimary from '@ecl/eu-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/eu-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/eu-specs-button/demo/data--call';
import demoContentGhost from '@ecl/eu-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/eu-specs-button/demo/data--search';

import Button from '../Button';

const icons = {
  none: '',
  arrow: 'ui--corner-arrow',
  external: 'ui--external',
};

const iconPosition = {
  before: 'before',
  after: 'after',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
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
      />
    );
  })
  .add('secondary', () => {
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
      />
    );
  })
  .add('call to action', () => {
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
      />
    );
  })
  .add('ghost', () => {
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
      />
    );
  })
  .add('search', () => {
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
      />
    );
  });

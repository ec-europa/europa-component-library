/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import demoContentPrimary from '@ecl/ec-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/ec-specs-button/demo/data--call';
import demoContentGhost from '@ecl/ec-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/ec-specs-button/demo/data--search';

import Button from '../Button';
import './index.scss';

const typeAttributes = { submit: 'Submit', button: 'Button', reset: 'Reset' };

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => (
    <Button
      variant={text('Variant', demoContentPrimary.variant)}
      label={text('Label', demoContentPrimary.label)}
      typeAttribute={select(
        'Type attribute',
        typeAttributes,
        demoContentPrimary.typeAttribute
      )}
      extraClasses={text('Extra classes', demoContentPrimary.extraClasses)}
    />
  ))
  .add('secondary', () => (
    <Button
      variant={text('Variant', demoContentSecondary.variant)}
      label={text('Label', demoContentSecondary.label)}
      typeAttribute={select(
        'Type attribute',
        typeAttributes,
        demoContentSecondary.typeAttribute
      )}
      extraClasses={text('Extra classes', demoContentSecondary.extraClasses)}
    />
  ))
  .add('call to action', () => (
    <Button
      variant={text('Variant', demoContentCall.variant)}
      label={text('Label', demoContentCall.label)}
      typeAttribute={select(
        'Type attribute',
        typeAttributes,
        demoContentCall.typeAttribute
      )}
      extraClasses={text('Extra classes', demoContentCall.extraClasses)}
    />
  ))
  .add('ghost', () => (
    <Button
      variant={text('Variant', demoContentGhost.variant)}
      label={text('Label', demoContentGhost.label)}
      typeAttribute={select(
        'Type attribute',
        typeAttributes,
        demoContentGhost.typeAttribute
      )}
      extraClasses={text('Extra classes', demoContentGhost.extraClasses)}
    />
  ))
  .add('search', () => (
    <Button
      variant={text('Variant', demoContentSearch.variant)}
      label={text('Label', demoContentSearch.label)}
      typeAttribute={select(
        'Type attribute',
        typeAttributes,
        demoContentSearch.typeAttribute
      )}
      extraClasses={text('Extra classes', demoContentSearch.extraClasses)}
    />
  ));

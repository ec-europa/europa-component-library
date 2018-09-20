/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/ec-specs-site-switcher/demo/data';

import SiteSwitcher from '../SiteSwitcher';

const variant = {
  none: '',
  header: 'header',
  footer: 'footer',
};

storiesOf('SiteSwitcher', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SiteSwitcher
      variant={select('variant', variant, 'header')}
      item1={{
        label: text('first item', demoContent.item1.label),
        href: text('first item link', demoContent.item1.href),
        isSelected: boolean(
          'first item selected',
          demoContent.item1.isSelected
        ),
      }}
      item2={{
        label: text('second item label', demoContent.item2.label),
        href: text('second item link', demoContent.item2.href),
        isSelected: boolean(
          'second item selected',
          demoContent.item2.isSelected
        ),
      }}
    />
  ));

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
        label: text('info item label', demoContent.info.label),
        href: demoContent.info.href,
        isSelected: boolean('info item selected', demoContent.item1.isSelected),
      }}
      item2={{
        label: text('political item label', demoContent.political.label),
        href: demoContent.political.href,
        isSelected: boolean(
          'political item selected',
          demoContent.political.isSelected
        ),
      }}
    />
  ));

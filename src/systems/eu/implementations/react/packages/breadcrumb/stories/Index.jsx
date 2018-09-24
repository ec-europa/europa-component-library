/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/eu-specs-breadcrumb/demo/data';

import Breadcrumb from '../Breadcrumb';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const items = demoContent.items.map((item, index) => ({
      label: text(`Item ${index}`, item.label),
      href: item.href,
    }));

    return <Breadcrumb items={items} label={demoContent.label} />;
  });

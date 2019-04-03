/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import simpleContent from '@ecl/eu-specs-breadcrumb/demo/data-simple';
import demoContent from '@ecl/eu-specs-breadcrumb/demo/data';

import Breadcrumb from '../src/Breadcrumb';
import BreadcrumbItem from '../src/BreadcrumbItem';

storiesOf('Navigation/Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ backgroundColor: '#004494' }}>{story()}</div>
  ))
  .add('simple', () => {
    const items = simpleContent.items.map((item, index) => ({
      label: text(`Item ${index}`, item.label),
      href: item.href,
    }));

    return (
      <Breadcrumb label={simpleContent.label} ellipsisLabel="Click to expand">
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
  })
  .add('long', () => {
    const items = demoContent.items.map((item, index) => ({
      label: text(`Item ${index}`, item.label),
      href: item.href,
    }));

    return (
      <Breadcrumb label={demoContent.label} ellipsisLabel="Click to expand">
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
  });

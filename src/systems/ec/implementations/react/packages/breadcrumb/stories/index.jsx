/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/ec-specs-breadcrumb/demo/data';

import Breadcrumb from '../src/Breadcrumb';
import BreadcrumbItem from '../src/BreadcrumbItem';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('simple', () => (
    <Breadcrumb label={demoContent.label} ellipsisLabel="Click to expand">
      {demoContent.items.map(item => (
        <BreadcrumbItem {...item} key={item.label} />
      ))}
    </Breadcrumb>
  ))
  .add('interactive', () => {
    const items = demoContent.items.map((item, index) => ({
      label: text(`Item ${index}`, item.label),
      href: item.href,
      isCurrentPage: item.isCurrentPage,
    }));

    return (
      <Breadcrumb label={demoContent.label} ellipsisLabel="Click to expand">
        {items.map(item => (
          <BreadcrumbItem {...item} key={item.label} />
        ))}
      </Breadcrumb>
    );
  });

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoContent3Col from '@ecl/ec-specs-fact-figures/demo/data--3-col';
import demoContent4Col from '@ecl/ec-specs-fact-figures/demo/data--4-col';

import { FactFigures } from '../src/FactFigures';

storiesOf('Components|Fact figures', module)
  .addDecorator(withKnobs)
  .add('3 columns', () => {
    const demoContentCopy = { ...demoContent3Col };
    const hasViewAll = boolean('View all link', true);
    demoContentCopy.viewAll = hasViewAll ? demoContent3Col.viewAll : {};

    const hasIcon = boolean('Display icons', true);

    for (let i = 0, len = demoContentCopy.items.length; i < len; i += 1) {
      demoContentCopy.items[i].icon = hasIcon
        ? {
            shape: 'general--digital',
            size: 'm',
          }
        : {};
    }

    return <FactFigures {...demoContentCopy} />;
  })
  .add('4 columns', () => {
    const demoContentCopy = { ...demoContent4Col };
    const hasViewAll = boolean('View all link', true);
    demoContentCopy.viewAll = hasViewAll ? demoContent4Col.viewAll : {};

    const hasIcon = boolean('Display icons', true);

    for (let i = 0, len = demoContentCopy.items.length; i < len; i += 1) {
      demoContentCopy.items[i].icon = hasIcon
        ? {
            shape: 'general--digital',
            size: 'm',
          }
        : {};
    }

    return <FactFigures {...demoContentCopy} />;
  });

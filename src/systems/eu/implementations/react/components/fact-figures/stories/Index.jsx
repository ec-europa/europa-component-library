import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoContent3Col from '@ecl/eu-specs-fact-figures/demo/data--3-col';
import demoContent4Col from '@ecl/eu-specs-fact-figures/demo/data--4-col';

import { FactFigures } from '../src/FactFigures';

export default {
  title: 'Components/Fact figures',
  decorators: [withKnobs],
};

export const _3Columns = () => {
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
};

_3Columns.storyName = '3 columns';

export const _4Columns = () => {
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
};

_4Columns.storyName = '4 columns';

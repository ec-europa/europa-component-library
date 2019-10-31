/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-fact-figures/demo/data';
import { FactFigures } from '../src/FactFigures';

storiesOf('Components|Fact figures', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const demoContentCopy = { ...demoContent };
    const hasViewAll = boolean('View all link', true);
    demoContentCopy.viewAll = hasViewAll ? demoContent.viewAll : {};

    for (let i = 0, len = demoContentCopy.items.length; i < len; i += 1) {
      const hasIcon = boolean(`Item ${i + 1} icon`, true);
      demoContentCopy.items[i].icon = hasIcon
        ? {
            shape: 'general--digital',
            size: 'm',
          }
        : {};
      demoContentCopy.items[i].value = text(
        `Item ${i + 1} value`,
        demoContentCopy.items[i].value
      );
      demoContentCopy.items[i].title = text(
        `Item ${i + 1} title`,
        demoContentCopy.items[i].title
      );
      demoContentCopy.items[i].description = text(
        `Item ${i + 1} description`,
        demoContentCopy.items[i].description
      );
    }

    return <FactFigures {...demoContentCopy} />;
  });

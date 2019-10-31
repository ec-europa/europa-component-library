/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-fact-figures/demo/data';
import { FactFigures } from '../src/FactFigures';

storiesOf('Components|Fact figures', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <FactFigures {...demoContent} />;
  });

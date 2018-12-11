/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoContentCorporate from '@ecl/ec-specs-footer/demo/data--corporate';
import demoContentCustom from '@ecl/ec-specs-footer/demo/data--custom';

import Footer from '../Footer';

storiesOf('Footer', module)
  .add('corporate', () => <Footer {...demoContentCorporate} />)
  .add('custom', () => <Footer {...demoContentCustom} />);

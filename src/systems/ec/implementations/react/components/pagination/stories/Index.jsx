import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-pagination/demo/data';

import Pagination from '../src/Pagination';

export default {
  title: 'Components/Navigation/Pagination',
  decorators: [withKnobs],
};

export const Default = () => <Pagination {...demoContent} />;

Default.storyName = 'default';
